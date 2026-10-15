import Image from 'next/image';
import type {Industry,EntertainmentCategory} from '@/data/industries';
import {galleryImages} from '@/data/gallery-images';

export function IndustryGallery({industry,category}:{industry:Industry;category?:EntertainmentCategory}){
  const images=galleryImages[category||industry];
  return <section className="industry-gallery-section"><div className="container section"><div className="section-heading"><div><p className="eyebrow">THE PEOPLE, TOOLS, AND ENVIRONMENTS BEHIND THE VISION</p><h2>{category==='gaming'?'From the screen to a shared experience.':category==='sports'?'Where participation becomes community.':category==='media'?'The craft behind every story.':'A closer look at the industry.'}</h2></div></div><div className="industry-gallery">{images.map((image,i)=><figure key={image.image} className={i===0?'gallery-lead':''}><div className="gallery-photo"><Image src={image.image} alt={image.alt} fill sizes="(max-width:700px) 90vw, 55vw"/></div><figcaption><span className="eyebrow">{image.label}</span><h3>{image.title}</h3><p>{image.description}</p><a href={image.source} target="_blank" rel="noopener noreferrer">Photo: {image.author} ↗</a><a className="gallery-license" href={image.licenseUrl} target="_blank" rel="noopener noreferrer">{image.license} · resized ↗</a></figcaption></figure>)}</div><p className="direction-note">Editorial photography illustrates these fields. It does not depict ELAVION facilities, employees, or products.</p></div></section>
}
