'use client';

import Image from 'next/image';
import {useState} from 'react';
import {Play,ExternalLink} from 'lucide-react';

const previews:Record<string,{photo:string;logo:string}>={
  fortnite:{photo:'/images/gaming.jpg',logo:'/images/platforms/fortnite.svg'},
  minecraft:{photo:'/images/products/xbox-series-x.webp',logo:'/images/platforms/minecraft.svg'},
  'ea-sports-fc':{photo:'/images/entertainment.jpg',logo:'/images/platforms/ea-sports-fc.svg'},
};

export function TrailerPlayer({slug,name,title,embedUrl,sourceUrl}:{slug:string;name:string;title:string;embedUrl:string;sourceUrl:string}){
  const [active,setActive]=useState(false);
  const preview=previews[slug];
  return <div className={`trailer-player trailer-${slug}`}>
    {!active?<button className="trailer-preview" onClick={()=>setActive(true)} aria-label={`Load official ${name} trailer`}>
      <Image className="trailer-context-photo" src={preview.photo} alt="" fill sizes="(max-width:700px) 90vw, 60vw"/>
      <span className="trailer-preview-shade"/>
      <span className="trailer-preview-top">OFFICIAL TRAILER <ExternalLink size={13}/></span>
      <span className="trailer-preview-center"><Image src={preview.logo} alt="" width={75} height={75}/><strong>{name}</strong><span className="trailer-play"><Play size={18} fill="currentColor"/>Load official trailer</span></span>
      <span className="trailer-preview-caption">EDITORIAL CONTEXT IMAGE · NOT GAMEPLAY</span>
    </button>:<div className="active-trailer"><iframe src={`${embedUrl}?rel=0`} title={title} allow="encrypted-media; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><div className="trailer-player-help"><button onClick={()=>setActive(false)}>Close player</button><a href={sourceUrl} target="_blank" rel="noopener noreferrer">Player unavailable? Watch on YouTube ↗</a></div></div>}
  </div>;
}
