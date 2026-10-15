'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {entertainment} from '@/data/industries';
export function EntertainmentNav(){const path=usePathname().replace(/\/$/,'');return <nav className="entertainment-nav" aria-label="Entertainment navigation"><div className="container"><span>ELAVION ENTERTAINMENT</span>{[{id:'',name:'Overview'},...entertainment].map(s=>{const href=`/industries/entertainment${s.id?'/'+s.id:''}`;return <Link key={s.id} href={href} aria-current={path===href?'page':undefined}>{s.name}</Link>})}</div></nav>}
