import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {industries,entertainment} from '@/data/industries';
import {insights} from '@/data/insights';
import {PageHero,SectionHeading,Photo,Breadcrumbs} from '@/components/ui';
import {ProductDirectory} from '@/components/Products';
import {ArticleCard} from '@/components/Insights';
import {CompanyDirection} from '@/components/CompanyDirection';
import {IndustryGallery} from '@/components/IndustryGallery';
import {GameShowcase} from '@/components/GameShowcase';
import {direction} from '@/data/direction';
import {EntertainmentNav} from '@/components/EntertainmentNav';
export function generateStaticParams(){return industries.map(d=>({division:d.id}))}
export async function generateMetadata({params}:{params:Promise<{division:string}>}):Promise<Metadata>{const {division}=await params;const d=industries.find(d=>d.id===division);return {title:d?.brand,description:d?.description}}
export default async function Division({params}:{params:Promise<{division:string}>}){const {division}=await params;const d=industries.find(d=>d.id===division);if(!d)notFound();return <div className={`division-page division-${d.id}`}><PageHero label={d.brand} title={d.headline} description={direction[d.id].summary} image={d.image} brand={d.id}/>{d.id==='entertainment'&&<EntertainmentNav/>}<div className="container"><Breadcrumbs items={[{name:'Industries',href:'/industries'},{name:d.name}]}/></div><IndustryGallery industry={d.id}/><CompanyDirection industry={d.id}/>{d.id==='entertainment'&&<GameShowcase/>}{d.id==='entertainment'?<section className="container section entertainment-stories">{entertainment.map((s,i)=><Link className="entertainment-story" href={`/industries/entertainment/${s.id}`} key={s.id}><div className="story-image"><Photo name={s.id} alt={`${s.name} editorial photograph`}/></div><div><p className="eyebrow">0{i+1} / {s.name}</p><h2>{s.headline}</h2><p>{s.description}</p><span className="text-link">Explore {s.name} <ArrowUpRight size={18}/></span></div></Link>)}</section>:<section className="container section"><SectionHeading label="OUR PERSPECTIVE" title={d.id==='healthcare'?'Innovation begins with people.':'Exploring the foundations of progress.'}/><div className="topic-grid">{d.topics.map(([title,text],i)=><article key={title}><span className="topic-number" style={{color:d.color}}>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>}<section className="section showcase-section"><div className="container"><SectionHeading label={d.brand} title="Explore the technology landscape"/><ProductDirectory industry={d.id}/></div></section><section className="section container"><SectionHeading label="EDITORIAL DEMONSTRATION" title="A perspective on what’s next." href="/insights" link="All insights"/><div className="article-grid">{insights.filter(a=>a.industry===d.id).map(a=><ArticleCard key={a.slug} article={a}/>)}</div></section><section className="container related-industries"><p className="eyebrow">EXPLORE RELATED INDUSTRIES</p>{industries.filter(x=>x.id!==d.id).map(x=><Link href={`/industries/${x.id}`} key={x.id}>{x.name}<ArrowUpRight size={18}/></Link>)}</section></div>}
