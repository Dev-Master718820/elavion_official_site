import type {Metadata} from 'next';
import {PageHero,SectionHeading,CareersCTA} from '@/components/ui';
import {IndustryGrid} from '@/components/IndustryGrid';
export const metadata:Metadata={title:'Our Industries',description:'Explore ELAVION’s connected industries: AI, healthcare, defense, entertainment, and digital communities.'};
export default function Industries(){return <><PageHero label="OUR INDUSTRIES" title="Different disciplines. Shared possibilities." description="Across industries, our ambition connects technology with human possibility." image="earth"/><section className="section container"><SectionHeading label="ONE ELAVION" title="Explore what connects us."/><IndustryGrid/></section><CareersCTA/></>}
