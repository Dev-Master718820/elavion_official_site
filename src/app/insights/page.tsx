import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PageHero,Photo,SectionHeading} from '@/components/ui';
import {InsightDirectory} from '@/components/Insights';
import {insights} from '@/data/insights';
export const metadata:Metadata={title:'Insights',description:'Perspectives on AI, healthcare, aerospace, entertainment, and digital communities.'};
export default function Insights(){const a=insights[0];return <><PageHero label="ELAVION INSIGHTS" title="New perspectives. Wider horizons." description="Ideas and questions at the intersection of technology, industry, and human possibility." image="architecture"/><section className="container section"><Link href={`/insights/${a.slug}`} className="featured-article"><div className="story-image"><Photo name={a.image} alt="Computing infrastructure"/></div><div><p className="eyebrow">FEATURED PERSPECTIVE / AI</p><h2>{a.title}</h2><p>{a.summary}</p><span className="text-link">Read perspective <ArrowUpRight size={18}/></span></div></Link><SectionHeading label="EXPLORE OUR PERSPECTIVES" title="Ideas worth your attention."/><InsightDirectory/></section></>}
