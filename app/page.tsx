import './landing.css';

const caseStudies = [
  { name: 'Dalhousie', category: 'Medical education', title: 'Designing Trauma-Informed Medical Education at Scale', description: 'Turning sensitive clinical knowledge into a repeatable system built around consent, clarity and patient agency.', image: '/portfolio/dal-clinical-setup.jpg', alt: 'Clinical teaching setup at Dalhousie University', href: '/case-studies/curriculum-design' },
  { name: 'WCF', category: 'Game design', title: 'Designing for the Rematch', description: 'A mobile wrestling trading card game designed around familiar systems, short-session battles and long-term engagement.', image: '/portfolio/wcf-battle-preview.jpg', alt: 'WCF wrestling card game battle prototype', href: '/case-studies/wcf' },
  { name: 'Tobytube', category: 'Personal project · Film systems', title: 'Feeding Passion with Spite', description: 'A streaming platform that catalogues thousands of films, turning a love of cinema into a world of discovery.', image: '/portfolio/tt-crowells-reimagined.webp', alt: 'Tobytube imagined as an after-dark video shop', href: '/case-studies/tobytube' },
];

export default function Home() {
  return <main className="landing-refresh">
    <section className="landing-hero" aria-labelledby="landing-title">
      <img className="landing-portrait" src="/portfolio/rob-portrait.jpg" alt="Rob Perry" width="144" height="144" fetchPriority="high" />
      <h1 id="landing-title">Accessible designs.<br/>Measurable <em>impact</em>.</h1>
      <p className="landing-introduction">Senior UX Designer and Researcher, Educational Designer, and former Emergency First Responder. Finding facts, turning them into actionable insights, and improving experiences across multiple industries for 10 years (just check out the variety below!).</p>
    </section>
    <aside className="portfolio-progress" aria-labelledby="portfolio-progress-heading">
      <h2 id="portfolio-progress-heading">The data says I have 9 seconds to get your attention.</h2>
      <p>So I'm going to use 2 of them to let you know that this portfolio is a work in progress with updates coming daily as my projects continue to develop.<br/>But hey, I'm a work in progress too, so it all equals out.</p>
    </aside>
    <section className="section landing-studies" id="expertise" aria-labelledby="case-studies-heading">
      <p className="eyebrow">SELECTED WORK</p>
      <h2 id="case-studies-heading">Case studies</h2>
      <div className="landing-study-stack">{caseStudies.map((project, index) =>
        <article className="landing-study" key={project.name}>
          <div className="landing-study-copy">
            <p className="eyebrow">0{index + 1} / {project.category}</p>
            <h3>{project.name}</h3>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a className="text-link" href={project.href} aria-label={`Read the ${project.name} case study`}>Read the case study <span aria-hidden="true">↗</span></a>
          </div>
          <a className="landing-study-image" href={project.href} aria-label={`Explore ${project.name}`}><img src={project.image} alt={project.alt} loading="lazy" /></a>
        </article>
      )}</div>
    </section>
    <section className="section landing-about" aria-labelledby="landing-about-heading">
      <div>
        <h2 id="landing-about-heading">About Me</h2>
        <div className="intro home-intro"><p>I'm Rob, a Senior UX Designer and Researcher with a decade of experience. I've worked with organisations in Ireland, Spain, Czechia, South Korea, Japan, and Canada to create intuitive, accessible, and <em>critical</em> systems for millions of users.</p><p>My portfolio isn't a gallery of pretty UI designs - it's a record of systems and experiences I've helped build. Some of them turned out to be better learning experiences than finished products, but there is no growth without failure. Those learning experiences have helped shape me into the agile designer I am today.</p><p>You're here because you're in the market for a fresh pair of eyes to help push your business or product into the future. We can do that together. Have a look at some of my projects, then contact me via email or telephone (I'm old enough to not be afraid of a phone call).</p></div>
        <a className="text-link" href="/about">My experience &amp; approach <span aria-hidden="true">↗</span></a>
      </div>
      <div className="hero-photo"><img src="https://images.unsplash.com/photo-1682839487854-ef6f8a088eeb?auto=format&fit=crop&w=1600&q=85" alt="Lush green coastal forest meeting the blue Pacific Ocean" loading="lazy"/><div className="image-caption"><span>Natural designs</span><span>With Nature in mind</span></div></div>
    </section>
  </main>;
}
