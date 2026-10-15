import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {Brand} from './Brand';
import {industries} from '@/data/industries';
import {nav} from '@/data/company';
export function Footer(){return <footer><div className="container footer-grid"><div><Brand/><p>A Brighter Tomorrow.<br/>Together.</p><span className="footer-note">A conceptual company. A shared vision<br/>for technology and human possibility.</span></div><div><h2>OUR INDUSTRIES</h2>{industries.map(d=><Link key={d.id} href={`/industries/${d.id}`}>{d.name}</Link>)}</div><div><h2>EXPLORE ELAVION</h2>{nav.map(([label,url])=><Link key={url} href={url}>{label}</Link>)}</div><div><h2>START A CONVERSATION</h2><p>Progress begins with<br/>a new perspective.</p><Link className="text-link" href="/contact">Get in touch <ArrowUpRight size={18}/></Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} ELAVION. Concept website.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms of use</Link><a href="#top">Back to top ↑</a></div></div></footer>}
