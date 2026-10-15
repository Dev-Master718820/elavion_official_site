import type {MetadataRoute} from 'next';
import {company} from '@/data/company';
import {industries,entertainment} from '@/data/industries';
import {products} from '@/data/products';
import {insights} from '@/data/insights';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['', '/about','/industries','/technology','/products','/insights','/careers','/contact','/privacy','/terms',...industries.map(d=>`/industries/${d.id}`),...entertainment.map(s=>`/industries/entertainment/${s.id}`),...products.map(p=>`/products/${p.slug}`),...insights.map(a=>`/insights/${a.slug}`)].map(path=>({url:`${company.origin}${path}/`}))}
