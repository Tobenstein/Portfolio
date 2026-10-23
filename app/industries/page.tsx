
import { sectors } from '../industry';
export const metadata = { title: 'Industries' };
export default function Industries() { return <main><section className="inner-hero"><p className="eyebrow">INDUSTRIES / HUMAN-CENTRED BY NATURE</p><h1>Different worlds.<br/><em>The same human focus.</em></h1><p className="intro">UX design across healthcare, learning, and play. Explore the challenges, services, and approach behind each area.</p></section><section className="section"><div className="sector-grid">{Object.entries(sectors).map(([key,s])=><a key={key} className={'sector '+key} href={'/'+(key==='medtech'?'healthcare':key==='edtech'?'education':key)}><div className="card-top"><span>{s.label.toUpperCase()}</span><span>↗</span></div><h3>{s.title} {s.em}</h3><p>{s.intro}</p><span className="card-link">Explore {s.label}<span>↗</span></span></a>)}</div></section></main> }

