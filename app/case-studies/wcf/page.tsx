import './wcf.css';

export const metadata = {
  title: 'WCF — Designing for the Rematch',
  description: 'A mobile wrestling trading card game designed around familiar systems, short-session battles, and long-term engagement.',
};

const chapters = [
  { label: 'The problem', copy: 'Digital trading card games compete in a crowded market. Players arrive with expectations shaped by established games: collect cards, trade, customise a deck, and battle. WCF needed a reason for people to try it—and a reason to come back—without making them learn an entirely unfamiliar system.' },
  { label: 'The constraint', copy: 'Innovation had to sit on top of familiar foundations. The competitive audit pointed towards distinctive cards and battle mechanics, but not so much novelty that players disengaged. Matches needed to fit into sessions under five minutes while still giving players enough depth to become invested.' },
  { label: 'My role', copy: 'As lead product designer, I worked across the game mechanics, card designs, progression systems, user flows, long-term in-game story, and marketing strategy. I drew on my experience as a professional wrestler to keep the experience faithful to the world it represented.' },
  { label: 'The research', copy: 'I audited comparable trading card games to distinguish acquisition from retention. Familiarity, recognition, and accessibility helped explain why someone might try a game. Collection, progression, social play, and a continuing release cadence helped explain why they might stay. These were design inputs from competitive research, not measured results from a launched WCF product.' },
  { label: 'The system', copy: 'The core loop connected collecting and customising cards with battles, rewards, and progression. Familiar interactions lowered the barrier to entry, while the wrestling theme, card design, and battle system gave the product its own identity. The aim was an experience that was easy to drop into, with enough depth to encourage another match.' },
  { label: 'Authenticity matters', copy: 'Wrestling fans want more than a familiar name on a generic game. The design needed to reflect the ecosystem, storytelling, and personality of professional wrestling. I wanted to bring a sense of nostalgia to the experience without making it feel dated.' },
  { label: 'The outcome', copy: 'I delivered a game design package, gameplay framework, business plan, release strategy, and approach to reaching the target audience. The original project lost its funding and did not launch. The prototype below is the current work in progress, rather than evidence of a shipped product or validated retention gains.' },
];

export default function WcfCaseStudy() {
  return (
    <main className="portfolio-case compact-case wcf-project">
      <nav className="case-breadcrumb" aria-label="Breadcrumb"><a href="/games#wcf">← Games</a></nav>
      <article>
        <header className="case-intro">
          <p className="eyebrow">WCF / GAME SYSTEMS / ORIGINAL PROJECT: 2023</p>
          <h1>Designing for<br/><em>the rematch.</em></h1>
          <p className="case-lede">World Championship Federation: a mobile wrestling trading card game built around collection, short-session battles, and the reasons people come back.</p>
          <div className="actions"><a className="button" href="#case-study">Explore the case study ↓</a><a className="text-link" href="#prototype">Try the prototype ↓</a></div>
        </header>
        <div id="case-study" className="case-chapters">
          {chapters.map(chapter => <section key={chapter.label}><h2>{chapter.label}</h2><p>{chapter.copy}</p></section>)}
        </div>
        <section className="section" aria-labelledby="wcf-loop-heading">
          <p className="eyebrow">THE GAMEPLAY LOOP</p>
          <h2 id="wcf-loop-heading">A reason to return.</h2>
          <ol className="wcf-gameplay-loop">{['Collect', 'Customize', 'Battle', 'Reward', 'Progress'].map(step => <li key={step}><strong>{step}</strong></li>)}</ol>
          <p className="prototype-help">Progress feeds back into collection and the next match. This diagram is reconstructed from the recovered write-up, not an original archived graphic.</p>
        </section>
        <aside className="case-outcome"><p className="eyebrow">WHAT IT DEMONSTRATES</p><p>Connecting research, game UX, and product strategy into a coherent system: balancing familiarity with novelty, designing for flexible play sessions, and bringing subject-matter experience into the details.</p></aside>
        <section id="prototype" className="case-prototype section wcf-prototype-section">
          <div className="section-heading"><div><p className="eyebrow">INTERACTIVE MOBILE PROTOTYPE / WORK IN PROGRESS</p><h2>The following contest is scheduled for one fall...</h2></div><a className="text-link" href="https://wcf-prototype.vercel.app/#battle" target="_blank" rel="noopener noreferrer">Open full prototype ↗</a></div>
          <p>Drag the cards into the ring area and pay the costs to throw some moves. You can take turns as Bash Lasher and Sexton Hardcastle to get a feel for the World Championship Federation&apos;s gameplay.</p>
          <div className="mobile-prototype-stage"><div className="prototype-phone"><iframe src="https://wcf-prototype.vercel.app/#battle" title="WCF mobile prototype" loading="lazy" allow="fullscreen"/></div></div>
        </section>
      </article>
      <div className="case-ending"><a className="button" href="/games">Explore more games ↗</a></div>
    </main>
  );
}
