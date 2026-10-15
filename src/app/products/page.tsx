import type {Metadata} from 'next';
import {PageHero,SectionHeading} from '@/components/ui';
import {ProductDirectory,ProductCarousel} from '@/components/Products';
export const metadata:Metadata={title:'Technology Discovery',description:'Discover third-party technologies through an independent editorial directory. Search products and brands across connected industries.'};
export default function Products(){return <><PageHero label="THE TECHNOLOGY DIRECTORY" title="Discover Technologies Shaping Tomorrow." description="An independent editorial view of the products, platforms, and systems across our industries." image="ai"/><section className="section container"><SectionHeading label="FEATURED TECHNOLOGIES" title="Featured technologies"/><ProductCarousel/></section><section className="section showcase-section"><div className="container"><SectionHeading label="SEARCH. DISCOVER. EXPLORE." title="Explore the technology landscape"/><ProductDirectory/></div></section></>}
