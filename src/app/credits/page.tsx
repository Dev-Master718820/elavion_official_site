import type {Metadata} from 'next';
import Image from 'next/image';
import {PageHero} from '@/components/ui';
import {galleryImages} from '@/data/gallery-images';
import {products} from '@/data/products';

export const metadata:Metadata={title:'Image Credits',description:'Photography, game artwork, and visual asset credits.'};
export default function Credits(){
 const images=Array.from(new Map(Object.values(galleryImages).flat().map(item=>[item.image,item])).values());
 return <><PageHero label="ACKNOWLEDGEMENTS" title="The people behind the imagery." description="Photography, game worlds, and visual assets from talented creators and studios."/><section className="section container credits-page"><p>Featured games and technologies are the work of their respective creators. Their inclusion provides industry context and does not indicate an ELAVION partnership or endorsement. Images are resized for the website; some are cropped to fit the layout.</p><h2>Industry galleries</h2><div className="credits-grid">{images.map(item=><article key={item.image}><Image src={item.image} alt={item.alt} width={320} height={180}/><div><h3>{item.title}</h3><p>{item.author}</p><a href={item.source} target="_blank" rel="noopener noreferrer">Original source ↗</a><a href={item.licenseUrl} target="_blank" rel="noopener noreferrer">{item.license} ↗</a>{item.href&&<a href={item.href} target="_blank" rel="noopener noreferrer">Official game website ↗</a>}</div></article>)}</div><h2>Product photography and marks</h2><div className="credits-grid">{products.filter(p=>p.image).map(p=><article key={p.id} id={p.slug}><Image className="credit-product" src={p.image!} alt={p.imageAlt||p.name} width={320} height={180}/><div><h3>{p.name}</h3><p>{p.attribution}</p>{p.imageSource&&<a href={p.imageSource} target="_blank" rel="noopener noreferrer">Original source ↗</a>}{p.imageLicenseUrl&&<a href={p.imageLicenseUrl} target="_blank" rel="noopener noreferrer">{p.imageLicense} ↗</a>}</div></article>)}</div></section></>;
}
