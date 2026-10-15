import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {direction,categoryDirection} from '@/data/direction';
import {industries,type Industry,type EntertainmentCategory} from '@/data/industries';
import {DivisionBrand,DivisionMark} from './DivisionBrand';

export function CompanyDirection({industry,category}:{industry:Industry;category?:EntertainmentCategory}) {
  const item=category?categoryDirection[category]:direction[industry];
  return <section className="section container company-direction" id="our-direction">
    <div className="direction-heading"><DivisionBrand division={category||industry} tagline/><span className="concept-status">PRODUCT VISION</span></div>
    <div className="direction-intro"><div><p className="eyebrow">WHAT ELAVION AIMS TO CREATE</p><h2>{item.title}</h2></div><div><p className="lead">{item.summary}</p><p className="intended-audience"><strong>Designed around:</strong> {item.audience}</p></div></div>
    <div className="concept-grid">{item.concepts.map((concept,i)=><article key={concept.name}><span className="concept-number">0{i+1}</span><h3>{concept.name}</h3><p>{concept.description}</p><div className="concept-example"><span>EXAMPLE EXPERIENCE</span><p>{concept.example}</p></div></article>)}</div>
    
  </section>;
}

export function CompanyPortfolio(){return <section className="section container company-portfolio"><div className="section-heading"><div><p className="eyebrow">OUR AMBITION</p><h2>Our product vision.</h2></div></div><p className="portfolio-lead">Our ambition is to create software and connected experiences for teams, care coordination, engineering, entertainment, and communities. Explore the experiences at the heart of our vision.</p><div className="portfolio-list">{industries.map(d=><Link key={d.id} href={`/industries/${d.id}#our-direction`}><DivisionMark division={d.id}/><div><p className="eyebrow">{d.brand}</p><h3>{direction[d.id].title}</h3><p>{direction[d.id].audience}</p></div><span>Explore the vision <ArrowUpRight size={18}/></span></Link>)}</div></section>}
