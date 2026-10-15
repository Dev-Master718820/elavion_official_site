'use client';

import Image from 'next/image';
import {useState} from 'react';
import type {FeaturedProduct} from '@/data/products';

/** Product photographs and platform marks share a restrained editorial stage. */
export function ProductVisual({product}:{product:FeaturedProduct}) {
  const [failed,setFailed]=useState(false);
  if (product.image && !failed) {
    return <div className={`product-art product-visual visual-${product.imageKind || 'photo'} art-${product.industry}`}>
      <span className="product-art-brand">{product.brand}</span>
      <div className="product-image-stage">
        <Image src={product.image} alt={product.imageAlt || product.name} fill sizes="(max-width:700px) 85vw, (max-width:960px) 45vw, 460px" onError={()=>setFailed(true)} />
      </div>
      <span className="art-caption">{product.imageKind==='logo'?'PLATFORM / BRAND MARK':'PRODUCT PHOTOGRAPH'}</span>
    </div>;
  }
  return <div className={`product-art art-${product.industry}`} role="img" aria-label={`${product.name} — editorial reference; product photograph unavailable`}>
    <span className="product-art-brand">{product.brand}</span>
    <span className="product-art-name">{product.name}</span>
    <span className="product-art-category">{product.category}</span>
    <span className="art-caption">EDITORIAL REFERENCE</span>
  </div>;
}
