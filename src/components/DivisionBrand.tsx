import Image from 'next/image';

export type BrandKey = 'ai'|'healthcare'|'defense'|'entertainment'|'gaming'|'sports'|'media'|'connect';
export const divisionBrands: Record<BrandKey,{name:string;tagline:string;icon:string}> = {
  ai:{name:'ELAVION AI',tagline:'Intelligence for what’s next.',icon:'ai'},
  healthcare:{name:'ELAVION HEALTH',tagline:'Technology for better care.',icon:'health'},
  defense:{name:'ELAVION DEFENSE',tagline:'Security for a safer world.',icon:'defense'},
  entertainment:{name:'ELAVION ENTERTAINMENT',tagline:'Gaming. Sports. Media.',icon:'play'},
  gaming:{name:'ELAVION PLAY',tagline:'Immersive entertainment.',icon:'play'},
  sports:{name:'ELAVION SPORTS',tagline:'Performance beyond limits.',icon:'sports'},
  media:{name:'ELAVION ENTERTAINMENT',tagline:'Stories without boundaries.',icon:'play'},
  connect:{name:'ELAVION CONNECT',tagline:'People closer together.',icon:'connect'},
};
export function DivisionMark({division,className=''}:{division:BrandKey;className?:string}) {
  return <Image className={`division-mark ${className}`} src={`/branding/${divisionBrands[division].icon}.svg`} alt="" width={60} height={60}/>;
}
export function DivisionBrand({division,tagline=false}:{division:BrandKey;tagline?:boolean}) {
  const brand=divisionBrands[division];
  return <div className="division-brand"><DivisionMark division={division}/><div><span>{brand.name}</span>{tagline&&<p>{brand.tagline}</p>}</div></div>;
}
