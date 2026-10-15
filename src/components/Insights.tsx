'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {insights,type Insight} from '@/data/insights';
import {industries} from '@/data/industries';
import {Photo} from './ui';
export function ArticleCard({article:a}:{article:Insight}){return <article className="article-card"><Link href={`/insights/${a.slug}`}><div className="article-image"><Photo name={a.image} alt=""/></div><div className="article-meta">{industries.find(d=>d.id===a.industry)?.name} <span>{a.category}</span></div><h3>{a.title}<ArrowUpRight size={21}/></h3><p>{a.summary}</p></Link></article>}
export function InsightDirectory(){const [industry,setIndustry]=useState('');const [category,setCategory]=useState('');const list=insights.filter(a=>(!industry||a.industry===industry)&&(!category||a.category===category));return <><div className="filter-row"><label className="select-label">Industry<select value={industry} onChange={e=>setIndustry(e.target.value)}><option value="">All industries</option>{industries.map(d=><option key={d.id} value={d.id}>{d.name}</option>)}</select></label><label className="select-label">Article type<select value={category} onChange={e=>setCategory(e.target.value)}><option value="">All types</option><option>Perspective</option><option>Explainer</option></select></label><button className="reset" onClick={()=>{setIndustry('');setCategory('')}}>Reset filters</button></div><p className="results-count" role="status">{list.length} articles</p><div className="article-grid">{list.map(a=><ArticleCard key={a.slug} article={a}/>)}</div>{!list.length&&<div className="empty-state">No articles match these filters. Try another selection.</div>}</>}
