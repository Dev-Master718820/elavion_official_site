import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {insights} from '@/data/insights';
import {PageHero,Breadcrumbs,SectionHeading} from '@/components/ui';
import {ArticleCard} from '@/components/Insights';
export function generateStaticParams(){return insights.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=insights.find(a=>a.slug===slug);return {title:a?.title,description:a?.summary}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=insights.find(a=>a.slug===slug);if(!a)notFound();return <><PageHero label={`ILLUSTRATIVE EDITORIAL / ${a.category.toUpperCase()}`} title={a.title} description={a.summary} image={a.image}/><div className="container"><Breadcrumbs items={[{name:'Insights',href:'/insights'},{name:a.title}]}/></div><article className="article-body"><p className="editorial-note">Original sample perspective for the ELAVION concept website. This is not current reporting or a company research announcement.</p>{a.sections.map(([title,text])=><section key={title}><h2>{title}</h2><p>{text}</p></section>)}</article><section className="section container"><SectionHeading label="CONTINUE THE CONVERSATION" title="Related reading" href="/insights" link="All insights"/><div className="article-grid">{insights.filter(x=>x.slug!==a.slug).slice(0,3).map(x=><ArticleCard key={x.slug} article={x}/>)}</div></section></>}
