import type {Industry,EntertainmentCategory} from '@/data/industries';
import {galleryImages} from '@/data/gallery-images';
import {IndustrySlider} from './IndustrySlider';

export function IndustryGallery({industry,category}:{industry:Industry;category?:EntertainmentCategory}){
  const key=category||industry;
  const titles={ai:'Intelligence, brought into focus.',healthcare:'The human side of technology.',defense:'Engineering beyond the horizon.',entertainment:'Step into extraordinary experiences.',connect:'The power of coming together.',gaming:'Worlds worth getting lost in.',sports:'Feel the energy. Follow the ambition.',media:'Stories begin with a new perspective.'};
  return <section className="industry-gallery-section"><div className="container section"><div className="section-heading"><div><p className="eyebrow">IN FOCUS</p><h2>{titles[key]}</h2></div><p className="slider-heading-note">{key==='gaming'||key==='entertainment'?'Introducing remarkable games, immersive worlds, and shared experiences.':'Discover the people, ideas, and technologies shaping the industry.'}</p></div><IndustrySlider images={galleryImages[key]} label={key}/></div></section>;
}
