import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {industries} from '@/data/industries';
import {Photo} from './ui';
import {DivisionMark} from './DivisionBrand';
export function IndustryGrid(){return <div className="industry-grid">{industries.map((d,i)=><Link href={`/industries/${d.id}`} key={d.id} className={`industry-tile tile-${d.id}`}><Photo name={d.image} alt={`${d.name} industry photography`}/><div className="tile-shade"/><span className="tile-index"><DivisionMark division={d.id}/>0{i+1} / {d.brand}</span><div className="tile-copy"><span className="accent-bar" style={{background:d.color}}/><h3>{d.name}</h3><p>{d.id==='entertainment'?'Gaming. Sports. Media. Extraordinary experiences.':d.description}</p><span className="tile-arrow"><ArrowUpRight size={22}/></span></div></Link>)}</div>}
