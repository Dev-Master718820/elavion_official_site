import {spawn} from 'node:child_process';
import {readdirSync,readFileSync,existsSync,writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import assert from 'node:assert/strict';

const files=[];
function walk(path){for(const entry of readdirSync(path,{withFileTypes:true})){const p=join(path,entry.name);if(entry.isDirectory())walk(p);else if(p.endsWith('.html'))files.push(p)}}
walk('out');assert(files.length>60);
for(const file of files){for(const match of readFileSync(file,'utf8').matchAll(/(?:href|src)="(\/[^"#?]*)/g)){if(match[1].startsWith('//'))continue;const path=join('out',match[1]);assert(existsSync(path)||existsSync(join(path,'index.html')),`${file}: ${match[1]}`)}}
console.log(`PASS: ${files.length} exported HTML files; all local links and image/script assets resolve.`);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const server=spawn('python3',['-m','http.server','4173','--bind','127.0.0.1','--directory','out'],{stdio:'ignore'});
const profile=mkdtempSync(join(tmpdir(),'elavion-qa-'));
const chrome=spawn(process.env.CHROME_PATH||'/opt/google/chrome/chrome',['--headless=new','--no-sandbox','--disable-gpu','--remote-debugging-port=9227',`--user-data-dir=${profile}`,'about:blank'],{stdio:'ignore'});
let socket;
try{
let targets;
for(let i=0;i<30;i++){try{targets=await(await fetch('http://127.0.0.1:9227/json')).json();if(targets.length)break}catch{}await sleep(300)}
assert(targets?.length,'Chrome debugging endpoint unavailable');
socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject});
let id=0;const pending=new Map();const errors=[];
socket.onmessage=event=>{const msg=JSON.parse(event.data);if(msg.id){const p=pending.get(msg.id);pending.delete(msg.id);if(msg.error)p.reject(new Error(msg.error.message));else p.resolve(msg.result)}else if(msg.method==='Runtime.exceptionThrown')errors.push(msg.params.exceptionDetails.text)};
const command=(method,params={})=>new Promise((resolve,reject)=>{const key=++id;pending.set(key,{resolve,reject});socket.send(JSON.stringify({id:key,method,params}))});
await command('Page.enable');await command('Runtime.enable');
const evaluate=async expression=>{const r=await command('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value};
const waitFor=async expression=>{for(let i=0;i<50;i++){if(await evaluate(expression))return;await sleep(100)}throw Error(`Timed out: ${expression}`)};
const go=async path=>{await command('Page.navigate',{url:`http://127.0.0.1:4173${path}`});await waitFor(`location.pathname===${JSON.stringify(path)} && document.readyState!=='loading' && !!document.querySelector('h1')`);await sleep(650)};
const click=selector=>evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
const input=async(selector,value)=>{await evaluate(`(()=>{const el=document.querySelector(${JSON.stringify(selector)});Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,${JSON.stringify(value)});el.dispatchEvent(new Event('input',{bubbles:true}));})()`);await sleep(200)};
await command('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await go('/');assert.match(await evaluate("document.querySelector('h1').textContent"),/Engineering/);
await click('.nav-trigger');await waitFor("!!document.querySelector('#industry-menu')");assert.equal(await evaluate("document.querySelectorAll('.mega-grid>div').length"),5);
await command('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});await waitFor("!document.querySelector('#industry-menu')");
console.log('PASS: desktop five-division mega menu and Escape dismissal.');
await go('/products/');
await evaluate("(async()=>{for(const i of Array.from(document.querySelectorAll('.directory .product-visual img'))){i.loading='eager';await i.decode().catch(()=>{})}})()");
assert(await evaluate("document.querySelectorAll('.directory .product-visual img').length>=30"),'Product catalog should be image-led');
assert(await evaluate("Array.from(document.querySelectorAll('.directory .product-visual img')).every(i=>i.complete&&i.naturalWidth>0)"),'Product images must load');
await evaluate("document.querySelector('.directory').scrollIntoView()");await sleep(300);
const productShot=await command('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});writeFileSync('/tmp/elavion-products.png',Buffer.from(productShot.data,'base64'));
console.log('PASS: local product photographs and platform logos load.');
await evaluate("document.querySelector('.directory .product-visual img').dispatchEvent(new Event('error'))");await waitFor("!!document.querySelector('.directory .product-art[role=img]')");console.log('PASS: failed product image falls back to an accessible editorial panel.');
await input('.directory input','Garmin');await waitFor("document.querySelectorAll('.directory .product-card').length===1");assert.match(await evaluate("document.querySelector('.directory').textContent"),/Garmin Forerunner/);
await input('.directory input','not-a-real-product-xyz');await waitFor("!!document.querySelector('.empty-state')");await click('.reset');
await evaluate("Array.from(document.querySelectorAll('.filter-chips button')).find(b=>b.textContent==='Entertainment').click()");await sleep(200);
await evaluate("Array.from(document.querySelectorAll('.filter-chips button')).find(b=>b.textContent==='Sports').click()");await waitFor("document.querySelectorAll('.directory .product-card').length===6");
await evaluate("(()=>{const s=document.querySelector('.select-label select');s.value='Wearables';s.dispatchEvent(new Event('change',{bubbles:true}))})()");await waitFor("document.querySelectorAll('.directory .product-card').length===3");
await go('/products/garmin-forerunner/');assert.equal(await evaluate("document.querySelector('h1').textContent"),'Garmin Forerunner');assert.match(await evaluate("document.querySelector('.product-detail a.button').href"),/garmin.com/);
console.log('PASS: product search, empty state, reset, combined Entertainment/Sports/category filters, product detail.');
await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await go('/');await click('.mobile-toggle');await waitFor("!!document.querySelector('[role=dialog]')");assert.equal(await evaluate('document.body.style.overflow'),'hidden');await click('.mobile-industries');await sleep(100);await evaluate("Array.from(document.querySelectorAll('.mobile-panel a')).find(a=>a.textContent==='Sports').click()");await waitFor("document.querySelector('h1')?.textContent==='Driven by Passion. Powered by Innovation.'");assert.notEqual(await evaluate('document.body.style.overflow'),'hidden');await click('.mobile-toggle');await sleep(100);await command('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});await waitFor("!document.querySelector('[role=dialog]')");assert.equal(await evaluate("document.activeElement.className"),'mobile-toggle');
for(const route of ['/','/products/','/contact/','/industries/entertainment/','/industries/healthcare/','/technology/','/insights/']){await go(route);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'),`Overflow: ${route}`)}
console.log('PASS: mobile nested navigation, scroll lock, focus restoration, and overflow on seven representative routes.');
await go('/contact/');await click('.contact-form button');assert.equal(await evaluate("!!document.querySelector('.form-status')"),false);await input('[name=name]','Alex Example');await input('[name=email]','alex@example.com');await input('[name=subject]','A general inquiry');await evaluate("(()=>{document.querySelector('[name=category]').value='General inquiry';document.querySelector('[name=message]').value='A demonstration inquiry with enough detail to validate.'})()");await click('.contact-form button');await waitFor("!!document.querySelector('.form-status')");assert.match(await evaluate("document.querySelector('.form-status').textContent"),/No message has been sent or saved/);
await go('/insights/');await evaluate("(()=>{const s=document.querySelectorAll('.select-label select')[0];s.value='healthcare';s.dispatchEvent(new Event('change',{bubbles:true}))})()");await waitFor("document.querySelectorAll('.article-grid .article-card').length===1");await evaluate("(()=>{const s=document.querySelectorAll('.select-label select')[1];s.value='Perspective';s.dispatchEvent(new Event('change',{bubbles:true}))})()");await waitFor("!!document.querySelector('.empty-state')");console.log('PASS: honest contact validation and combined insight filters.');
await command('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
for(const route of ['/industries/ai/','/industries/healthcare/','/industries/defense/','/industries/connect/','/industries/entertainment/','/industries/entertainment/gaming/','/industries/entertainment/sports/','/industries/entertainment/media/']){
 await go(route);assert(await evaluate("!!document.querySelector('.company-direction')"),route+' needs concrete product direction');assert.match(await evaluate("document.querySelector('.concept-status').textContent"),/PRODUCT VISION/);assert(await evaluate("document.querySelectorAll('.slider-thumbnails button').length>=11"));
 await evaluate("(async()=>{for(const i of Array.from(document.querySelectorAll('.industry-slider img,.division-mark'))){i.loading='eager';await i.decode().catch(()=>{})}})()");assert(await evaluate("Array.from(document.querySelectorAll('.industry-slider img,.division-mark')).every(i=>i.naturalWidth>0)"));
 assert(await evaluate("!document.querySelector('.slide-caption,.thumbnail-title,.slider-credit,.slide-topline')"),'Gallery must contain images without visible captions or credits');
 await click('[aria-label="Next slide"]');await waitFor("document.querySelector('.industry-slide').getAttribute('aria-label').startsWith('2 of')");
 await click('[aria-label="Previous slide"]');await waitFor("document.querySelector('.industry-slide').getAttribute('aria-label').startsWith('1 of')");
 await click('[aria-label="Previous slide"]');assert(await evaluate("document.querySelector('.slider-thumbnails button:last-child').getAttribute('aria-pressed')==='true'"));
 await click('.slider-thumbnails button');await waitFor("document.querySelector('.slider-thumbnails button').getAttribute('aria-pressed')==='true'");
}
await go('/industries/entertainment/gaming/');
assert(await evaluate("document.querySelectorAll('.slider-thumbnails button').length>=15"));
await evaluate("document.querySelector('.industry-slider').focus()");await command('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight'});await waitFor("document.querySelector('.industry-slide').getAttribute('aria-label').startsWith('2 of')");
await click('.slider-thumbnails button');await evaluate("document.querySelector('.industry-slider').scrollIntoView();document.activeElement.blur()");await command('Input.dispatchMouseEvent',{type:'mouseMoved',x:0,y:0});await sleep(300);await click('.slider-play');await sleep(6900);assert(await evaluate("document.querySelector('.industry-slide').getAttribute('aria-label').startsWith('2 of')"),'Opt-in playback must advance');await click('.slider-play');
await command('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await waitFor("document.querySelector('.slider-play').disabled");await command('Emulation.setEmulatedMedia',{features:[]});
for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
 await command('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<700});await click('.slider-thumbnails button');await evaluate("document.querySelector('.industry-slider').scrollIntoView()");await sleep(400);assert(await evaluate('document.documentElement.scrollWidth<=window.innerWidth'));const shot=await command('Page.captureScreenshot',{format:'png'});writeFileSync(`/tmp/elavion-game-slides-${name}.png`,Buffer.from(shot.data,'base64'));
}
await evaluate("(()=>{const s=document.querySelector('.slider-stage');s.dispatchEvent(new TouchEvent('touchstart',{bubbles:true,touches:[new Touch({identifier:1,target:s,clientX:300,clientY:100})]}));s.dispatchEvent(new TouchEvent('touchend',{bubbles:true,changedTouches:[new Touch({identifier:1,target:s,clientX:100,clientY:110})]}))})()");await waitFor("document.querySelector('.industry-slide').getAttribute('aria-label').startsWith('2 of')");
console.log('PASS: eight sliders, loaded images, next/previous/wrap, thumbnails, keyboard, mobile swipe and reduced motion.');
await command('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await go('/credits/');assert(await evaluate("document.querySelectorAll('.credits-grid article').length>60"));assert(await evaluate("document.querySelector('.credits-page').textContent.includes('Hello Games')"));
await go('/about/');assert.equal(await evaluate("document.querySelectorAll('.portfolio-list>a').length"),5);assert.equal(await evaluate("document.querySelectorAll('.brand-family .division-mark').length"),6);await evaluate("document.querySelector('.company-portfolio').scrollIntoView()");await sleep(200);let extraShot=await command('Page.captureScreenshot',{format:'png'});writeFileSync('/tmp/elavion-about-direction.png',Buffer.from(extraShot.data,'base64'));
await go('/industries/entertainment/gaming/');assert.equal(await evaluate("document.querySelectorAll('.game-showcase .trailer-preview').length"),3);await evaluate("document.querySelectorAll('.trailer-preview').forEach(b=>b.click())");await waitFor("document.querySelectorAll('.game-showcase iframe').length===3");assert(await evaluate("Array.from(document.querySelectorAll('.game-showcase iframe')).every(f=>f.src.startsWith('https://www.youtube-nocookie.com/embed/')&&!f.src.includes('autoplay=1'))"));await evaluate("document.querySelectorAll('.trailer-player-help button').forEach(b=>b.click())");await waitFor("document.querySelectorAll('.trailer-preview').length===3");await evaluate("document.querySelector('.game-showcase').scrollIntoView()");await sleep(500);extraShot=await command('Page.captureScreenshot',{format:'png'});writeFileSync('/tmp/elavion-game-trailers.png',Buffer.from(extraShot.data,'base64'));
console.log('PASS: proposed directions, eight image galleries, six sub-brand marks, and three official non-autoplay embeds.');
for(const [name,width,height] of [['mobile',390,844],['desktop',1440,1000]]){await command('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<700});await go('/');await evaluate("(async()=>{await document.fonts.ready;for(const i of Array.from(document.images)){i.loading='eager';await i.decode().catch(()=>{})}})()");assert(await evaluate('Array.from(document.images).every(i=>i.complete&&i.naturalWidth>0)'));const shot=await command('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});writeFileSync(`/tmp/elavion-${name}.png`,Buffer.from(shot.data,'base64'))}
assert.deepEqual(errors,[]);console.log('PASS: all homepage images load, no browser runtime exceptions; desktop/mobile screenshots saved in /tmp.');
}finally{socket?.close();chrome.kill();server.kill();await sleep(600);rmSync(profile,{recursive:true,force:true})}
