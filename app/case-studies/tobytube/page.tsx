export const metadata={title:'Tobytube Media Hub, or: Feeding Passion with Spite'};
function MotionClip({src,poster,label}:{src:string;poster:string;label:string}){return <figure className="tt-motion"><video controls playsInline preload="none" poster={poster} aria-label={label}><source src={src} type="video/webm"/></video><figcaption>{label}</figcaption></figure>}
export default function Tobytube(){return <main className="portfolio-case tt-case"><nav className="case-breadcrumb" aria-label="Breadcrumb"><a href="/personal-projects">← Personal Projects</a><a href="/case-studies">All case studies ↗</a></nav><article>
      <header className="tt-hero">
        <img src="/portfolio/tt-crowells-reimagined.webp" alt="An imagined after-dark video store inspired by Crowell’s Midnight Store" />
        <div className="tt-hero-shade" />
        <div className="tt-hero-copy">
          <p className="tt-kicker">Personal project · 6,000 films · Zero budget</p>
          <h1 id="tt-title">Tobytube</h1>
          <p>Feeding passion with spite.</p>
        </div>
      </header>

      <section className="tt-opening">
        <p className="tt-label">Before you ask</p>
        <div>
          <blockquote>“We’re a finance company. What the hell does a media player have to do with finance?”</blockquote>
          <p className="tt-reply">Hold on, bro. I’m way ahead of you.</p>
          <p>What you have are multiple diverse services that you want to live under one roof. Your services handle various categories of data, with the end goal of helping the user find what they need easily and efficiently.</p>
          <blockquote className="tt-small-quote">“But movies are completely different from what we do at [your company name here]!”</blockquote>
          <p>That is ego talking. I don’t do ego over here.</p>
          <p className="tt-manifesto">I fix problems.</p>
        </div>
      </section>

      <section className="tt-story">
        <div className="tt-story-copy">
          <p className="tt-label">Context, or: user persona</p>
          <h2>I grew up behind the counter of a video store.</h2>
          <p>There’s a pretty okay media-server SaaS product out there. Let’s call it Flex. I paid monthly because it was inexpensive and I didn’t want to pony up for a lifetime pass. After two years, I realised I had already paid for two lifetime passes. That’s a me problem.</p>
          <p>Then Flex doubled the lifetime price—and a year later, tripled it again.</p>
          <blockquote>“Homie don’t play dat.”<span>— Homie D. Clown</span></blockquote>
          <p>Jellyfin offered an open-source alternative, but neither product handled certain media the way I wanted. Professional wrestling, for example, behaves like television building towards a film-sized event. Both systems insisted on separating media by format instead of respecting the experience.</p>
          <p>I’m a product of the video-rental era. My mother worked beside a wall of VHS tapes in nondescript black shells. I loved the mystery of knowing there were worlds in there.</p>
        </div>
        <div className="tt-store-pair">
          <figure><img src="/portfolio/tt-crowells-original.webp" alt="The original Crowell’s Midnight Store" /><figcaption>The actual Crowell’s Midnight Store.</figcaption></figure>
          <figure><img src="/portfolio/tt-crowells-reimagined.webp" alt="An AI-assisted reimagining of Crowell’s Midnight Store as Tobytube" /><figcaption>The memory, rebuilt as a digital place.</figcaption></figure>
        </div>
      </section>

      <section className="tt-challenge">
        <p className="tt-label">The challenge</p>
        <div className="tt-numbers"><div><strong>~6,000</strong><span>movies</span></div><div><strong>~300</strong><span>TV shows</span></div><div><strong>0</strong><span>dollars</span></div><div><strong>0</strong><span>coding skills</span></div></div>
        <h2>Digitally recreate the feeling of browsing a video store.</h2>
        <div className="tt-two-col"><p>Most streaming services are cold, impersonal and ugly, relying on walls of images instead of honing in on taste. I’m a vibes-based watcher. What I put on depends on mood as much as anything—and the wrong movie will quickly kill the mood.</p><p>I was limited to whatever AI coding tools could do. ChatGPT handled some basic functionality, but I discovered the limits of its thinking and rationale pretty quickly.</p></div>
      </section>

      <section className="tt-hallucinations">
        <div className="tt-section-heading"><p className="tt-label">The AI problem</p><h2>Ask for film history.<br />Receive extremely confident fan fiction.</h2><p>I asked AI to find themed collections from the Criterion Channel. It began with real collections—then hallucinated Docklands, Harbour and Maritime Noir into existence.</p></div>
        <div className="tt-noir-groups">
          <div><p>Real collections</p><div className="tt-noir-grid"><img src="/portfolio/tt-noir-japanese.webp" alt="Japanese Noir collection artwork" /><img src="/portfolio/tt-noir-nordic.webp" alt="Nordic Noir collection artwork" /><img src="/portfolio/tt-noir-queer.webp" alt="Queer Noir collection artwork" /></div></div>
          <div><p>Hallucinated collections</p><div className="tt-noir-grid"><img src="/portfolio/tt-noir-harbour.webp" alt="Hallucinated Harbour Noir artwork" /><img src="/portfolio/tt-noir-industrial.webp" alt="Hallucinated Industrial Noir artwork" /><img src="/portfolio/tt-noir-maritime.webp" alt="Hallucinated Maritime Noir artwork" /></div></div>
        </div>
        <p className="tt-aside">Notice the homogeneous output—the “sameness” running through everything. AI could make attractive objects. It could not decide whether those objects belonged in the system.</p>
      </section>

      <section className="tt-thinking">
        <p className="tt-label">The thinking</p>
        <div><h2>Streaming services organise inventory.<br />Video stores organised anticipation.</h2><p>Conventional UX logic says “more pages = bad.” It also says “rewarding journey = good.” To recreate the video-store experience, I needed the nearest translation of that experience in both physical and technical terms.</p><p>A video store lets you browse by feeling. It is qualitative. Streaming services treat movies as data objects and sort them by relative type. That experience is quantitative.</p><p>I chose themed collections over blunt categories. Genre matters, but subgenre, season, mood and cultural association matter too. Comedy is fine. <em>Indefensible Stupidity</em> is better. “Rainy-day movies” is a legitimate subgenre.</p></div>
      </section>

      <section className="tt-iterations">
        <div className="tt-section-heading"><p className="tt-label">Iterations</p><h2>Pretty is not the same thing as useful.</h2><p>The Marvel Cinematic Universe is straightforward: arrange media by phase and put things where they logically belong. AI gave me impressive interfaces that were almost entirely unusable.</p></div>
        <div className="tt-mcu-early"><figure><img src="/portfolio/tt-mcu-v1.webp" alt="First over-engineered MCU landing page concept" /><figcaption>Version one: every phase becomes a destination.</figcaption></figure><figure><img src="/portfolio/tt-mcu-v2.webp" alt="Second over-engineered MCU cosmic-map concept" /><figcaption>Version two: beautiful, elaborate, and needlessly difficult.</figcaption></figure></div>
        <p className="tt-verdict">They’re utterly useless.</p>
        <figure className="tt-mcu-final"><img src="/portfolio/tt-mcu-final.webp" alt="Final MCU page using a large hero and clear media carousels" /><figcaption>The final direction: the artwork attracts attention; the carousels do the actual work.</figcaption></figure>
        <div className="tt-two-col"><p>Does Phase One need its own landing page? It’s six movies—a fraction of a carousel. I put the Infinity Saga on one carousel so other angles had room to breathe. The bloated Multiverse Saga could be divided while remaining under one umbrella.</p><p>The MCU collection taught me that click-through fatigue builds just as fast as scroll fatigue—if not faster. A collection should generally remain one page. Otherwise, navigating it starts to feel like The Backrooms.</p></div>
      </section>

      <section className="tt-criterion">
        <div className="tt-section-heading"><p className="tt-label">The exception</p><h2>I love The Criterion Collection.<br />I hate The Criterion Channel.</h2><p>Minimalism is fine until it feels like there’s nothing there. Criterion’s films deserved atmosphere, discovery and a little flavour.</p></div>
        <div className="tt-motion-compare"><MotionClip src="/portfolio/tt-criterion-original.webm" poster="/portfolio/tt-criterion-original-poster.jpg" label="The existing Criterion browsing experience" /><MotionClip src="/portfolio/tt-criterion-redesign.webm" poster="/portfolio/tt-criterion-redesign-poster.jpg" label="The Tobytube Criterion collection" /></div>
        <div className="tt-criterion-stills"><img src="/portfolio/tt-criterion-landing.webp" alt="Tobytube Criterion landing page" /><img src="/portfolio/tt-criterion-collections.webp" alt="Tobytube Criterion boxed-set collection page" /></div>
      </section>

      <section className="tt-final-system">
        <div className="tt-section-heading"><p className="tt-label">The final system</p><h2>Four categories.<br />Thousands of ways in.</h2><p>Tobytube is still in development because it’s mine. I will forever add things I want, remove things I don’t, and overhaul the visuals whenever I feel like it.</p></div>
        <MotionClip src="/portfolio/tt-browse.webm" poster="/portfolio/tt-browse-poster.jpg" label="Browsing the current Tobytube system" />
        <div className="tt-category-row"><span>Movies</span><span>Television</span><span>Wrestling</span><span>Collections</span></div>
        <p className="tt-system-copy">The interface is simple: a side menu, basic landing pages, and four clear categories. The work is in how the data is presented—keeping thousands of titles intuitive, legible and close at hand.</p>
        <MotionClip src="/portfolio/tt-wrestling.webm" poster="/portfolio/tt-wrestling-poster.jpg" label="The wrestling archive in use" />
        <blockquote className="tt-ugly">The wrestling page is ugly. This is not an award-winning design.<br /><em>But you know what? It works.</em></blockquote>
        <p className="tt-system-copy">It’s intuitive. It’s easy to grasp. It gets you where you need to be in a hurry. When no useful reference model existed, I built a database of professional-wrestling history and designed the model myself.</p>
      </section>

      <section className="tt-moral">
        <p className="tt-label">The moral of the story</p>
        <h2>If it ain’t broke, don’t fix it.<br /><span>If it’ll leave you broke, build your own.</span></h2>
        
      </section>
    </article><div className="case-ending"><a className="button" href="/personal-projects">More personal projects ↗</a></div></main>}
