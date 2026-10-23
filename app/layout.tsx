import BrandLogo from './brand-logo';
import type { Metadata } from 'next';

import './globals.css';
import './portfolio.css';
import MainNavigation from './main-navigation';
export const metadata:Metadata={title:{default:'Rob Perry — Senior UX Designer & Researcher',template:'%s | Rob Perry'},description:'The personal portfolio of Rob Perry, Senior UX Designer & Researcher. Human-centred design for medtech, learning experiences, edtech and games.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#content" className="skip">Skip to content</a><header className="header"><a href="/" className="brand" aria-label="Rob Perry home"><BrandLogo compact/></a><MainNavigation/><a className="header-cta" href="/contact">Let’s talk <span>↗</span></a></header><div id="content">{children}</div><footer><div className="footer-identity"><a href="/" className="footer-brand" aria-label="Rob Perry home"><BrandLogo/></a><div className="footer-top"><p>Have something meaningful in mind?</p><a href="/contact">Let’s make it happen. <svg className="footer-mail-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Rob Perry</span><span>Rob Perry · Independent by nature. Since 2016.</span><a href="https://unsplash.com/photos/Yw9hebN1UO8" target="_blank" rel="noreferrer">Photography: Josh Withers</a></div></footer></body></html>}


