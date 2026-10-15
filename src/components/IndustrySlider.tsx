'use client';

import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,ArrowUpRight,Pause,Play} from 'lucide-react';
import type {GalleryImage} from '@/data/gallery-images';

export function IndustrySlider({images,label}:{images:GalleryImage[];label:string}) {
  const [index,setIndex]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [hovered,setHovered]=useState(false);
  const [focused,setFocused]=useState(false);
  const [visible,setVisible]=useState(false);
  const [reducedMotion,setReducedMotion]=useState(false);
  const root=useRef<HTMLDivElement>(null);
  const touch=useRef<{x:number;y:number}|null>(null);
  const current=images[index];

  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setReducedMotion(media.matches);
    update();media.addEventListener('change',update);
    const observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting),{threshold:.25});
    if(root.current)observer.observe(root.current);
    return()=>{media.removeEventListener('change',update);observer.disconnect()};
  },[]);
  useEffect(()=>{
    if(!playing||hovered||focused||!visible||reducedMotion)return;
    const timer=window.setInterval(()=>{if(!document.hidden)setIndex(i=>(i+1)%images.length)},6500);
    return()=>window.clearInterval(timer);
  },[playing,hovered,focused,visible,reducedMotion,images.length]);

  const select=(next:number)=>{setIndex((next+images.length)%images.length);setPlaying(false)};
  if(!current)return null;
  return <div ref={root} className="industry-slider" role="region" aria-roledescription="carousel" aria-label={`${label} image slideshow`} tabIndex={0}
    onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}
    onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();select(index+1)}else if(e.key==='ArrowLeft'){e.preventDefault();select(index-1)}}}>
    <div className="slider-stage" onTouchStart={e=>{touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}} onTouchEnd={e=>{if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x;const dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4)select(index+(dx<0?1:-1));touch.current=null}}>
      <figure key={current.image} className="industry-slide" role="group" aria-roledescription="slide" aria-label={`${index+1} of ${images.length}: ${current.title}`}>
        <div className="slide-image"><Image src={current.image} alt={current.alt} fill sizes="(max-width:700px) 100vw, 90vw"/></div>
        <div className="slide-shade"/>
        <div className="slide-topline"><span>{current.kind==='game'?'INSIDE THE GAME':'INDUSTRY IN FOCUS'}</span><span>{String(index+1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span></div>
        <figcaption className="slide-caption"><p className="eyebrow">{current.label}</p><h3>{current.title}</h3><p>{current.description}</p>{current.href&&<a className="slide-cta" href={current.href} target="_blank" rel="noopener noreferrer">Explore official game <ArrowUpRight size={17}/><span className="sr-only"> (opens new tab)</span></a>}</figcaption>
      </figure>
    </div>
    <div className="slider-toolbar"><div className="slide-position" aria-live={playing?'off':'polite'} aria-atomic="true"><span>{String(index+1).padStart(2,'0')}</span><span className="slide-position-line"/><span>{String(images.length).padStart(2,'0')}</span><p>{current.kind==='game'?'Official game imagery':'Editorial photography'}</p></div><div className="slider-buttons" role="group" aria-label="Slideshow controls"><button className="slider-play" onClick={()=>{setPlaying(!playing);setFocused(false)}} aria-label={playing?'Pause slideshow':'Play slideshow'} aria-pressed={playing} disabled={reducedMotion}>{playing?<Pause size={15}/>:<Play size={15}/>}<span>{playing?'Pause':'Play'}</span></button><button onClick={()=>select(index-1)} aria-label="Previous slide"><ArrowLeft size={20}/></button><button onClick={()=>select(index+1)} aria-label="Next slide"><ArrowRight size={20}/></button></div></div>
    <div className="slider-thumbnails" role="group" aria-label="Choose a slide">{images.map((image,i)=><button key={image.image} onClick={()=>select(i)} aria-label={`Show slide ${i+1}: ${image.title}`} aria-pressed={index===i} className={index===i?'selected':''}><span className="thumbnail-photo"><Image src={image.image} alt="" fill sizes="(max-width:700px) 130px, 220px"/></span><span className="thumbnail-title"><small>{String(i+1).padStart(2,'0')}</small>{image.title}</span></button>)}</div>
    <div className="slider-credit"><span>{current.kind==='game'?'Artwork':'Photo'}: {current.author}.</span><a href={current.source} target="_blank" rel="noopener noreferrer">Source ↗</a><a href={current.licenseUrl} target="_blank" rel="noopener noreferrer">{current.license} ↗</a><span>Resized for display.</span></div>
  </div>;
}
