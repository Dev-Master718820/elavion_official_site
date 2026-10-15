import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PageHero,Photo,SectionHeading} from '@/components/ui';
import {InsightDirectory} from '@/components/Insights';
import {insights} from '@/data/insights';
export const metadata:Metadata={title:'Insights',description:'Illustrative editorial perspectives on AI, healthcare, aerospace, entertainment, and digital communities.'};
export default function Insights(){const a=insights[0];return <><PageHero label="ELAVION INSIGHTS" title="New perspectives. Wider horizons." description="Ideas and questions at the intersection of technology, industry, and human possibility." image="architecture"/><section className="container section"><p className="editorial-note">Editorial demonstration content. These original sample essays are not current news, company research, or announcements.</p><Link href={`/insights/${a.slug}`} className="featured-article"><div className="story-image"><Photo name={a.image} alt="Computing infrastructure"/></div><div><p className="eyebrow">FEATURED PERSPECTIVE / AI</p><h2>{a.title}</h2><p>{a.summary}</p><span className="text-link">Read perspective <ArrowUpRight size={18}/></span></div></Link><SectionHeading label="EXPLORE OUR PERSPECTIVES" title="Ideas worth your attention."/><InsightDirectory/></section></>}
