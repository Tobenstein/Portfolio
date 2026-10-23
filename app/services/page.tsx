
import {offerings} from './service-detail';
import OfferPoints from './offer-points';
export const metadata={title:'My Services'};
export default function Services(){return <main><section className="inner-hero"><p className="eyebrow">MY SERVICES / FROM QUESTION TO CLARITY</p><h1>Competent support, coherent solutions -<br/><em>Where you need them most.</em></h1><p className="intro">From exploring a product idea to refining an interface and planning implementation, find the support that fits your next step.</p><a className="text-link" href="/contact">Discuss your project ↗</a></section><section className="section"><div className="sector-grid">{Object.entries(offerings).map(([slug,s])=><a className="sector" href={'/services/'+slug} key={slug}><div className="card-top"><span>SERVICES</span><span>↗</span></div><h3>{s.title}</h3><p>{s.intro}</p><span className="card-link">Explore this service<span>↗</span></span></a>)}</div></section><OfferPoints/></main>}

