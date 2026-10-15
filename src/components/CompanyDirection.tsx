import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {direction,categoryDirection} from '@/data/direction';
import {industries,type Industry,type EntertainmentCategory} from '@/data/industries';
import {DivisionBrand,DivisionMark} from './DivisionBrand';

export function CompanyDirection({industry,category}:{industry:Industry;category?:EntertainmentCategory}) {
  const item=category?categoryDirection[category]:direction[industry];
  return <section className="section container company-direction" id="our-direction">
    <div className="direction-heading"><DivisionBrand division={category||industry} tagline/><span className="concept-status">PROPOSED PRODUCT DIRECTION</span></div>
    <div className="direction-intro"><div><p className="eyebrow">WHAT ELAVION AIMS TO CREATE</p><h2>{item.title}</h2></div><div><p className="lead">{item.summary}</p><p className="intended-audience"><strong>Designed around:</strong> {item.audience}</p></div></div>
    <div className="concept-grid">{item.concepts.map((concept,i)=><article key={concept.name}><span className="concept-number">0{i+1}</span><h3>{concept.name}</h3><p>{concept.description}</p><div className="concept-example"><span>EXAMPLE EXPERIENCE</span><p>{concept.example}</p></div></article>)}</div>
    <p className="direction-note">These are proposed concepts for the ELAVION vision. Development, availability, and release dates have not been confirmed. Products featured in the industry showcase belong to other companies.</p>
  </section>;
}

export function CompanyPortfolio(){return <section className="section container company-portfolio"><div className="section-heading"><div><p className="eyebrow">A CLEARER PICTURE OF ELAVION</p><h2>Five areas. Specific product ambitions.</h2></div></div><p className="portfolio-lead">ELAVION’s proposed direction is to create software and connected experiences for teams, care coordination, engineering, entertainment, and communities. The programs below describe that ambition in practical terms.</p><div className="portfolio-list">{industries.map(d=><Link key={d.id} href={`/industries/${d.id}#our-direction`}><DivisionMark division={d.id}/><div><p className="eyebrow">{d.brand}</p><h3>{direction[d.id].title}</h3><p>{direction[d.id].audience}</p></div><span>View proposed direction <ArrowUpRight size={18}/></span></Link>)}</div><p className="direction-note">Company stage: concept definition. These proposed programs are not announcements of products currently being built or sold. Confirmed project information will replace this concept positioning when available.</p></section>}
