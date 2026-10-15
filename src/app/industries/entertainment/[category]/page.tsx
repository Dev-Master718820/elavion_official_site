import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {entertainment} from '@/data/industries';
import {EntertainmentNav} from '@/components/EntertainmentNav';
import {PageHero,SectionHeading,Breadcrumbs} from '@/components/ui';
import {ProductDirectory} from '@/components/Products';
import {ArticleCard} from '@/components/Insights';
import {CompanyDirection} from '@/components/CompanyDirection';
import {IndustryGallery} from '@/components/IndustryGallery';
import {GameShowcase} from '@/components/GameShowcase';
import {categoryDirection} from '@/data/direction';
import {insights} from '@/data/insights';
export function generateStaticParams(){return entertainment.map(s=>({category:s.id}))}
export async function generateMetadata({params}:{params:Promise<{category:string}>}):Promise<Metadata>{const {category}=await params;const s=entertainment.find(s=>s.id===category);return {title:`${s?.name} — ELAVION Entertainment`,description:s?.description}}
export default async function EntertainmentCategory({params}:{params:Promise<{category:string}>}){const {category}=await params;const s=entertainment.find(s=>s.id===category);if(!s)notFound();return <><PageHero label={`ELAVION ENTERTAINMENT / ${s.name.toUpperCase()}`} title={s.headline} description={categoryDirection[s.id].summary} image={s.id} brand={s.id}/><EntertainmentNav/><div className="container"><Breadcrumbs items={[{name:'Entertainment',href:'/industries/entertainment'},{name:s.name}]}/></div><CompanyDirection industry="entertainment" category={s.id}/><IndustryGallery industry="entertainment" category={s.id}/>{s.id==='gaming'&&<GameShowcase/>}<section className="section showcase-section"><div className="container"><SectionHeading label={`${s.name.toUpperCase()} DISCOVERY`} title="Industry Showcase — Third-Party Products"/><ProductDirectory industry="entertainment" subcategory={s.id}/></div></section><section className="section container"><SectionHeading label="ILLUSTRATIVE EDITORIAL" title="More perspectives on play."/><div className="article-grid"><ArticleCard article={insights[3]}/></div></section></>}
