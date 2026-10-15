import type {Metadata} from 'next';
import {PageHero,SectionHeading} from '@/components/ui';
import {ProductDirectory,ProductCarousel} from '@/components/Products';
export const metadata:Metadata={title:'Technology Discovery',description:'Discover third-party technologies through an independent editorial directory. Search products and brands across five industries.'};
export default function Products(){return <><PageHero label="THE TECHNOLOGY DIRECTORY" title="Discover Technologies Shaping Tomorrow." description="An independent editorial view of the products, platforms, and systems across our five industry perspectives." image="ai"/><section className="section container"><SectionHeading label="EDITORIAL SELECTION" title="Featured technologies"/><ProductCarousel/></section><section className="section showcase-section"><div className="container"><SectionHeading label="SEARCH. DISCOVER. EXPLORE." title="Industry Showcase — Third-Party Products"/><ProductDirectory/></div></section></>}
