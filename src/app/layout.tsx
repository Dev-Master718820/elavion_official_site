import type {Metadata} from 'next';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {company} from '@/data/company';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(company.origin),title:{default:'ELAVION — Engineering What’s Next.',template:'%s | ELAVION'},description:company.description,openGraph:{title:'ELAVION — A Brighter Tomorrow. Together.',description:company.description,images:[{url:'/images/earth.jpg',width:2400,height:1600}]},icons:{icon:'/branding/wing.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
