import { FormEvent, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Download, X } from "lucide-react";

type Project = {
  number: string; id: string; title: string; client: string; summary: string;
  outcome: string; image?: string; tone?: "personal"; chapters: { label: string; copy: string }[];
};

const seriousProjects: Project[] = [
  {
    number: "01", id: "dalhousie", client: "Dalhousie · Medical education",
    title: "Designing Trauma-Informed Medical Education at Scale",
    summary: "Turning sensitive clinical knowledge into a repeatable system built around consent, clarity and patient agency.",
    outcome: "Exam time reduced from roughly six minutes to two; training time reduced from 90 minutes to 60.",
    image: "/dal-exam-room.jpg",
    chapters: [
      { label: "The problem", copy: "Clinical examinations are high-stakes interactions. Inconsistent training created unnecessary cognitive load for clinicians and could leave patients without a clear sense of control." },
      { label: "The thinking", copy: "I translated qualitative insight into a teachable protocol: explicit consent, predictable communication and repeatable touch mechanics. Emotional safety became part of clinical quality—not an optional layer." },
      { label: "The outcome", copy: "A complex, sensitive practice became easier to teach and faster to perform. The approach was adopted by hundreds of medical professionals while preserving the thing efficiency usually erodes: humanity." },
    ],
  },
  {
    number: "02", id: "mycare", client: "MyCare · Healthcare systems",
    title: "Repairing Broken Systems: Data Aggregation in Medical Care",
    summary: "Making scattered patient information legible when attention is limited and every second matters.",
    outcome: "A scalable model for sharing and monitoring vital data across emergency, inpatient and at-home care.",
    image: "/mycare-dashboard-mobile.png",
    chapters: [
      { label: "The problem", copy: "Medical teams are expected to interpret fragmented patient data in the middle of a crisis. Patients face the same fragmentation at home, usually without clinical expertise." },
      { label: "The constraint", copy: "The product had to serve very different levels of knowledge, work across devices and make priority information obvious without oversimplifying it." },
      { label: "The system", copy: "I mapped patient and clinician tasks into shared, task-first flows, then designed one information model that reveals greater detail as expertise and context require it." },
    ],
  },
  {
    number: "03", id: "paladin", client: "Paladin · Crisis response",
    title: "Six Seconds or Dead: How Working in Crisis Response Influences My Designs",
    summary: "What happens when every choice competes for attention—and hesitation has a measurable cost.",
    outcome: "A design philosophy grounded in triage, calm communication and making the next action unmistakable.",
    chapters: [
      { label: "The situation", copy: "A heart attack, a fire alarm, a woman in labour and an armed threat do not arrive in a useful sequence. In crisis response, ambiguity is not an inconvenience. It is risk." },
      { label: "The lesson", copy: "You learn to separate urgency from noise, understand dependencies quickly and communicate without creating more panic. The clearest choice is rarely the loudest one." },
      { label: "The influence", copy: "That experience follows me into every product. I design hierarchy before decoration, failure states before happy paths and systems that remain understandable when the user has very little attention to spare." },
    ],
  },
];

const personalProjects: Project[] = [
  {
    number: "04", id: "tobytube", client: "Personal project · Film systems", tone: "personal",
    title: "Tobytube Media Hub, or: Feeding Passion with Spite",
    summary: "A streaming platform that catalogues thousands of films because existing services kept making tiny, avoidable decisions that annoyed me.",
    outcome: "A complete media world: taxonomy, discovery, curation and an unreasonable amount of film knowledge in one system.",
    image: "/tt-crowells-reimagined.webp",
    chapters: [
      { label: "The provocation", copy: "Tobytube began with the productive kind of irritation: the belief that a familiar product could be more thoughtful, more personal and much more fun." },
      { label: "The world", copy: "I designed a catalogue, navigation model and visual identity that treat film discovery as culture rather than inventory. Every small interaction reinforces the feeling of entering a particular place." },
      { label: "Why it matters", copy: "Personal work removes the usual excuses. It shows how I make scope, invent rules and sustain a system when curiosity—not a brief—is the engine." },
    ],
  },
  {
    number: "05", id: "hilareads", client: "Personal project · Social reading", tone: "personal",
    title: "Hilareads: Rivers of Data, Mountains of Fun",
    summary: "A warmer reading platform where reviews, recommendations, analytics and community belong to the same landscape.",
    outcome: "A flexible design language for turning personal reading data into discovery and connection.",
    image: "/hilareads-desktop.png",
    chapters: [
      { label: "The problem", copy: "Reading trackers can become sterile databases; social platforms can bury the books beneath performance. Hilareads needed to do both without becoming either." },
      { label: "The landscape", copy: "I connected goals, reviews, ratings, recommendations and community through reusable patterns that feel warm enough to browse and structured enough to remain useful." },
      { label: "The result", copy: "A product system with room for both analytics and intimacy. Early user feedback was overwhelmingly positive. Admittedly, she did marry me." },
    ],
  },
];

function ProjectRow({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <article className={`project ${project.tone === "personal" ? "personal-project" : ""}`}>
    <div className="project-copy">
      <p className="project-number">{project.number}</p><p className="project-context">{project.client}</p>
      <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
      <p className="outcome"><span>What it demonstrates</span>{project.outcome}</p>
      <button className="project-link" onClick={() => onOpen(project)}>Read the chapter <ArrowRight size={17} /></button>
    </div>
    <button className={`project-image ${!project.image ? "crisis-graphic" : ""}`} onClick={() => onOpen(project)} aria-label={`Read ${project.title}`}>
      {project.image ? <img src={project.image} alt="" loading="lazy" /> : <><span>00:06</span><b>Decide what matters.</b></>}
    </button>
  </article>;
}

function DalhousieCase({ onClose }: { onClose: () => void }) {
  return <div className="case-overlay dal-case" role="dialog" aria-modal="true" aria-labelledby="dal-title">
    <button className="close" onClick={onClose} aria-label="Close case study"><X/></button>
    <article>
      <header className="dal-hero"><img src="/dal-exam-room.jpg" alt="A prepared clinical examination room"/><div className="dal-hero-copy"><p className="project-context">Dalhousie University · 2018–2024</p><h2 id="dal-title">Designing Trauma-Informed Medical Education at Scale</h2><p>How do you teach an invasive clinical examination—quickly, thoroughly and without repeating the dynamics of trauma?</p></div></header>
      <section className="dal-summary"><p className="section-index">The assignment</p><h3>Condense a semester of clinical study into sixty minutes.</h3><div><p>Our patients are survivors of severe, potentially life-threatening physical assault.</p><p>Patients must now undergo a pelvic exam which will test for/gauge the extent of injuries. This test, in some ways, replicates the physical trauma they have experienced.</p><p>Our medical professionals are examining the patients with the goal of creating a record of the physical trauma, as well as gathering data for potential diagnoses.</p><p>I have to devise a learning program which condenses a full semester of clinical examination study into a 60 minute session to be delivered by two Sensitive Exam Teaching Associates (SETAs) who will serve as simulated patients.</p></div></section>
      <section className="dal-facts" aria-label="Project facts"><div><span>Role</span><strong>Lead UX Designer<br/>Instructional Designer<br/>Researcher</strong></div><div><span>Duration</span><strong>6 years</strong></div><div><span>Reach</span><strong>~360 learners<br/>30 workshops</strong></div><div><span>Feedback</span><strong>96% positive</strong></div></section>
      <figure className="dal-wide-image"><img src="/dal-clinical-setup.jpg" alt="Medical educators preparing a simulated clinical examination space"/><figcaption>Clinical training required the room, tools and people to function as one carefully staged system.</figcaption></figure>
      <section className="dal-section split"><div><p className="section-index">The constraint</p><h3>Everything mattered.<br/>We had one hour.</h3></div><div className="dal-body"><p>Two Sensitive Exam Teaching Associates—serving as simulated patients—had to brief pairs of learners and observe each learner completing the practicum.</p><p>The curriculum covered four interconnected systems:</p><ol><li><strong>Clinical setup</strong><span>Which tools are needed, where they belong and why their order signals competence and safety.</span></li><li><strong>Body language</strong><span>Talk before touch, hand placement, eye contact, and the difference between standing over someone and sitting beside them.</span></li><li><strong>Verbal communication</strong><span>Inclusive language, accurate nomenclature and words that preserve trust rather than quietly diminish it.</span></li><li><strong>Pacing</strong><span>Fast enough to minimise time under stress; deliberate enough that the patient never feels rushed or dismissed.</span></li></ol></div></section>
      <figure className="dal-diagram"><img src="/dal-exam-components.png" alt="Diagram connecting body language, verbiage, clinical setup and pacing to patient outcomes"/><figcaption>The examination was treated as a system of signals. Small choices could establish trust—or create danger.</figcaption></figure>
      <section className="dal-section question-section"><p className="section-index">Two perspectives</p><h3>We were designing for the learner and the patient at the same time.</h3><div className="question-grid"><div><span>For learners</span><p>How do we make training efficient, engaging and memorable for anxious, exhausted medical professionals?</p><p>How do we keep the room light enough to learn in, without making the context feel light?</p></div><div><span>For patients</span><p>How do we make a thorough examination feel participatory rather than invasive?</p><p>How do we build an inclusive experience that gives future patients confidence to come forward?</p></div></div></section>
      <figure className="dal-wide-image patient"><img src="/dal-sim-patient.jpg" alt="A medical simulation mannequin prepared beside a computer workstation"/><figcaption>Simulation made it possible to practise the mechanics. The teaching associates made it possible to understand the human experience.</figcaption></figure>
      <section className="dal-section iterations"><p className="section-index">Iteration</p><h3>Instruction during the exam—or preparation before it?</h3><div className="iteration-grid"><div><span>01 · Live instruction</span><h4>Learn while performing</h4><p>After a short introduction, learners were walked through the examination in real time. It created more room for questions, but forced them to assume the clinical role before they had time to prepare.</p></div><div className="selected"><span>02 · Blocking</span><h4>Learn, absorb, then perform</h4><p>Instruction and practice became distinct blocks. Learners understood the role, constraints and procedure before approaching the simulated patient. The result was calmer, faster and substantially more effective.</p></div></div></section>
      <figure className="dal-diagram timing"><img src="/dal-timing-comparison.png" alt="Pie charts comparing time allocation for blocking and live instruction methods"/><figcaption>Blocking gave the first learner space to prepare and allowed the second learner to benefit from both instruction and observation.</figcaption></figure>
      <section className="dal-section split final-system"><div><p className="section-index">The final system</p><h3>Forty minutes to show.<br/>Twenty minutes to prove.</h3></div><div className="dal-body"><p>The final model combined self-guided study with a strictly regimented clinical tutorial. Roughly forty minutes covered setup, physical communication, verbal communication and the examination itself.</p><p>The remaining time was protected for two learners to demonstrate the complete experience.</p><blockquote>Blocking worked because it recognised preparation as part of performance.</blockquote><p>The first learner typically completed the simulation in 10–12 minutes. The second, having observed once, completed it in roughly 4–8 minutes—approaching real clinical timing.</p></div></section>
      <section className="dal-results"><p className="section-index">Results</p><h3>The system made the examination faster.<br/>More importantly, it made care feel safer.</h3><div className="result-grid"><div><strong>90 → 60</strong><span>minutes per training session</span></div><div><strong>96%</strong><span>positive mandatory feedback</span></div><div><strong>~360</strong><span>medical professionals trained</span></div></div><p className="result-note">My personal reward was knowing we contributed positive change to an overworked, under-funded healthcare system—and gave future medical professionals the skill and confidence to care for survivors better.</p></section>
      <button className="project-link dal-back" onClick={onClose}>Back to the map <ArrowRight size={17}/></button>
    </article>
  </div>;
}

function MotionClip({ src, poster, label }: { src: string; poster: string; label: string }) {
  return <figure className="tt-motion">
    <div className="tt-video-frame">
      <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-label={label}>
        <source src={src} type="video/webm" />
      </video>
      <img className="tt-motion-fallback" src={poster} alt="" />
    </div>
    <figcaption>{label}</figcaption>
  </figure>;
}

function TobytubeCase({ onClose }: { onClose: () => void }) {
  return <div className="case-overlay tt-case" role="dialog" aria-modal="true" aria-labelledby="tt-title">
    <button className="close tt-close" onClick={onClose} aria-label="Close case study"><X /></button>
    <article>
      <header className="tt-hero">
        <img src="/tt-crowells-reimagined.webp" alt="An imagined after-dark video store inspired by Crowell’s Midnight Store" />
        <div className="tt-hero-shade" />
        <div className="tt-hero-copy">
          <p className="tt-kicker">Personal project · 6,000 films · Zero budget</p>
          <h2 id="tt-title">Tobytube</h2>
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
          <p>That is ego talking. We don’t do ego over here.</p>
          <p className="tt-manifesto">We fix problems.</p>
        </div>
      </section>

      <section className="tt-story">
        <div className="tt-story-copy">
          <p className="tt-label">Context, or: user persona</p>
          <h3>I grew up behind the counter of a video store.</h3>
          <p>There’s a pretty okay media-server SaaS product out there. Let’s call it Flex. I paid monthly because it was inexpensive and I didn’t want to pony up for a lifetime pass. After two years, I realised I had already paid for two lifetime passes. That’s a me problem.</p>
          <p>Then Flex doubled the lifetime price—and a year later, tripled it again.</p>
          <blockquote>“Homie don’t play dat.”<span>— Homie D. Clown</span></blockquote>
          <p>Jellyfin offered an open-source alternative, but neither product handled certain media the way I wanted. Professional wrestling, for example, behaves like television building toward a film-sized event. Both systems insisted on separating media by format instead of respecting the experience.</p>
          <p>I’m a product of the video-rental era. My mother worked beside a wall of VHS tapes in nondescript black shells. I loved the mystery of knowing there were worlds in there.</p>
        </div>
        <div className="tt-store-pair">
          <figure><img src="/tt-crowells-original.webp" alt="The original Crowell’s Midnight Store" /><figcaption>The actual Crowell’s Midnight Store.</figcaption></figure>
          <figure><img src="/tt-crowells-reimagined.webp" alt="An AI-assisted reimagining of Crowell’s Midnight Store as Tobytube" /><figcaption>The memory, rebuilt as a digital place.</figcaption></figure>
        </div>
      </section>

      <section className="tt-challenge">
        <p className="tt-label">The challenge</p>
        <div className="tt-numbers"><div><strong>~6,000</strong><span>movies</span></div><div><strong>~300</strong><span>TV shows</span></div><div><strong>0</strong><span>dollars</span></div><div><strong>0</strong><span>coding skills</span></div></div>
        <h3>Digitally recreate the feeling of browsing a video store.</h3>
        <div className="tt-two-col"><p>Most streaming services are cold, impersonal and ugly, relying on walls of images instead of honing in on taste. I’m a vibes-based watcher. What I put on depends on mood as much as anything—and the wrong movie will quickly kill the mood.</p><p>I was limited to whatever AI coding tools could do. ChatGPT handled some basic functionality, but I discovered the limits of its thinking and rationale pretty quickly.</p></div>
      </section>

      <section className="tt-hallucinations">
        <div className="tt-section-heading"><p className="tt-label">The AI problem</p><h3>Ask for film history.<br />Receive extremely confident fan fiction.</h3><p>I asked AI to find themed collections from the Criterion Channel. It began with real collections—then hallucinated Docklands, Harbour and Maritime Noir into existence.</p></div>
        <div className="tt-noir-groups">
          <div><p>Real collections</p><div className="tt-noir-grid"><img src="/tt-noir-japanese.webp" alt="Japanese Noir collection artwork" /><img src="/tt-noir-nordic.webp" alt="Nordic Noir collection artwork" /><img src="/tt-noir-queer.webp" alt="Queer Noir collection artwork" /></div></div>
          <div><p>Hallucinated collections</p><div className="tt-noir-grid"><img src="/tt-noir-harbour.webp" alt="Hallucinated Harbour Noir artwork" /><img src="/tt-noir-industrial.webp" alt="Hallucinated Industrial Noir artwork" /><img src="/tt-noir-maritime.webp" alt="Hallucinated Maritime Noir artwork" /></div></div>
        </div>
        <p className="tt-aside">Notice the homogeneous output—the “sameness” running through everything. AI could make attractive objects. It could not decide whether those objects belonged in the system.</p>
      </section>

      <section className="tt-thinking">
        <p className="tt-label">The thinking</p>
        <div><h3>Streaming services organise inventory.<br />Video stores organised anticipation.</h3><p>Conventional UX logic says “more pages = bad.” It also says “rewarding journey = good.” To recreate the video-store experience, I needed the nearest translation of that experience in both physical and technical terms.</p><p>A video store lets you browse by feeling. It is qualitative. Streaming services treat movies as data objects and sort them by relative type. That experience is quantitative.</p><p>I chose themed collections over blunt categories. Genre matters, but subgenre, season, mood and cultural association matter too. Comedy is fine. <em>Indefensible Stupidity</em> is better. “Rainy-day movies” is a legitimate subgenre.</p></div>
      </section>

      <section className="tt-iterations">
        <div className="tt-section-heading"><p className="tt-label">Iterations</p><h3>Pretty is not the same thing as useful.</h3><p>The Marvel Cinematic Universe is straightforward: arrange media by phase and put things where they logically belong. AI gave me impressive interfaces that were almost entirely unusable.</p></div>
        <div className="tt-mcu-early"><figure><img src="/tt-mcu-v1.webp" alt="First over-engineered MCU landing page concept" /><figcaption>Version one: every phase becomes a destination.</figcaption></figure><figure><img src="/tt-mcu-v2.webp" alt="Second over-engineered MCU cosmic-map concept" /><figcaption>Version two: beautiful, elaborate, and needlessly difficult.</figcaption></figure></div>
        <p className="tt-verdict">They’re utterly useless.</p>
        <figure className="tt-mcu-final"><img src="/tt-mcu-final.webp" alt="Final MCU page using a large hero and clear media carousels" /><figcaption>The final direction: the artwork attracts attention; the carousels do the actual work.</figcaption></figure>
        <div className="tt-two-col"><p>Does Phase One need its own landing page? It’s six movies—a fraction of a carousel. I put the Infinity Saga on one carousel so other angles had room to breathe. The bloated Multiverse Saga could be divided while remaining under one umbrella.</p><p>The MCU collection taught me that click-through fatigue builds just as fast as scroll fatigue—if not faster. A collection should generally remain one page. Otherwise, navigating it starts to feel like The Backrooms.</p></div>
      </section>

      <section className="tt-criterion">
        <div className="tt-section-heading"><p className="tt-label">The exception</p><h3>I love The Criterion Collection.<br />I hate The Criterion Channel.</h3><p>Minimalism is fine until it feels like there’s nothing there. Criterion’s films deserved atmosphere, discovery and a little flavour.</p></div>
        <div className="tt-motion-compare"><MotionClip src="/tt-criterion-original.webm" poster="/tt-criterion-original-poster.jpg" label="The existing Criterion browsing experience" /><MotionClip src="/tt-criterion-redesign.webm" poster="/tt-criterion-redesign-poster.jpg" label="The Tobytube Criterion collection" /></div>
        <div className="tt-criterion-stills"><img src="/tt-criterion-landing.webp" alt="Tobytube Criterion landing page" /><img src="/tt-criterion-collections.webp" alt="Tobytube Criterion boxed-set collection page" /></div>
      </section>

      <section className="tt-final-system">
        <div className="tt-section-heading"><p className="tt-label">The final system</p><h3>Four categories.<br />Thousands of ways in.</h3><p>Tobytube is still in development because it’s mine. I will forever add things I want, remove things I don’t, and overhaul the visuals whenever I feel like it.</p></div>
        <MotionClip src="/tt-browse.webm" poster="/tt-browse-poster.jpg" label="Browsing the current Tobytube system" />
        <div className="tt-category-row"><span>Movies</span><span>Television</span><span>Wrestling</span><span>Collections</span></div>
        <p className="tt-system-copy">The interface is simple: a side menu, basic landing pages, and four clear categories. The work is in how the data is presented—keeping thousands of titles intuitive, legible and close at hand.</p>
        <MotionClip src="/tt-wrestling.webm" poster="/tt-wrestling-poster.jpg" label="The wrestling archive in use" />
        <blockquote className="tt-ugly">The wrestling page is ugly. This is not an award-winning design.<br /><em>But you know what? It works.</em></blockquote>
        <p className="tt-system-copy">It’s intuitive. It’s easy to grasp. It gets you where you need to be in a hurry. When no useful reference model existed, I built a database of professional-wrestling history and designed the model myself.</p>
      </section>

      <section className="tt-moral">
        <p className="tt-label">The moral of the story</p>
        <h3>If it ain’t broke, don’t fix it.<br /><span>If it’ll leave you broke, build your own.</span></h3>
        <button className="tt-back" onClick={onClose}>Back to the map <ArrowRight size={18} /></button>
      </section>
    </article>
  </div>;
}

function EmbeddedPrototype({ projectId }: { projectId: "hilareads" | "mycare" }) {
  const prototype = projectId === "hilareads"
    ? { name: "Hilareads", url: "https://www.hilareads.com" }
    : { name: "MyCare", url: "https://mycare-theta.vercel.app" };

  return <section className="embedded-prototype" aria-labelledby={`${projectId}-prototype-title`}>
    <div className="embedded-prototype-heading">
      <p className="project-context">Interactive prototype</p>
      <h3 id={`${projectId}-prototype-title`}>Explore {prototype.name}</h3>
      <a href={prototype.url} target="_blank" rel="noreferrer">Open full screen <ArrowRight size={16} /></a>
    </div>
    <div className="embedded-prototype-frame">
      <iframe src={prototype.url} title={`Interactive ${prototype.name} prototype`} loading="lazy" allow="fullscreen" />
    </div>
  </section>;
}

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);
  useEffect(() => { document.body.style.overflow = activeProject ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [activeProject]);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };

  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#top">Rob Perry</a><nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#thinking">Thinking</a><a href="/rob-perry-cv.pdf">CV</a><a href="#contact">Contact</a></nav></header>
    <main id="main">
      <section className="crisis-hero" id="top">
        <p className="eyebrow">A question of priorities</p>
        <div className="crisis-lines" aria-label="A crisis scenario">
          <p>You’re sitting at your desk.</p><p>The phone rings.</p>
          <p>In building A, a patient is having a <em>heart attack.</em></p>
          <p>In building B, there is a <em>fire alarm.</em></p>
          <p>In front of you, someone nine months pregnant has gone into <em>labour.</em></p>
          <p>On the floor below, an armed person is threatening <em>violence.</em></p>
        </div>
        <div className="crisis-question"><h1>What do you do?</h1><a href="#intro" aria-label="Continue to introduction"><ArrowDown /></a></div>
      </section>

      <section className="intro" id="intro">
        <p className="section-index">Introduction</p>
        <div><h2>I’m Rob, a Senior UX Designer who specializes in making complex things feel obvious.</h2>
          <p>I enjoy solving problems that don’t come with instruction manuals.</p>
          <p>Sometimes that means helping clinicians deliver better care to survivors of trauma.</p>
          <p>Sometimes it means designing a streaming platform capable of organizing thousands of films.</p>
          <p>The industries change.<br/>The thinking doesn’t.</p>
          <blockquote>I don’t draw screens.<br/><em>I build worlds.</em></blockquote>
        </div>
      </section>

      <section className="ai-statement" id="thinking">
        <p className="section-index">AI &amp; judgment</p>
        <div><h2>This portfolio was built with AI-assisted development.</h2>
          <p>I use AI every day. It helps me prototype faster, explore more ideas, and automate repetitive work.</p>
          <p>But deciding which problems to solve—and how to solve them—still requires human judgment.</p>
          <blockquote>There’s no outsourcing taste—<br/><span>especially to a machine that is only as smart as we make it.</span></blockquote>
        </div>
      </section>

      <section className="map-statement">
        <p className="section-index">What this is</p>
        <div><h2>This isn’t a museum of deliverables.</h2>
          <p>I’m not trying to sell you the things I’ve already built.</p><p>It’s a map of how I think.</p>
          <p className="small">I’m showing you the diversity of my skills and experience—and how they can help your business.</p>
        </div>
      </section>

      <section className="work" id="work">
        <header className="section-header"><p className="section-index">Selected work · The serious bit</p><h2>Let’s start with the heavy lifting.</h2></header>
        {seriousProjects.map(project => <ProjectRow key={project.id} project={project} onOpen={setActiveProject} />)}
      </section>

      <section className="play-intro"><p className="section-index">Intermission</p><h2>With that out of the way, here are some personal projects.</h2><p>You can clearly see I am a fun person.<br/><em>Not every problem is life or death.</em></p></section>
      <section className="personal-work">{personalProjects.map(project => <ProjectRow key={project.id} project={project} onOpen={setActiveProject} />)}</section>

      <section className="contact" id="contact">
        <div className="contact-heading"><p className="section-index">One last thing</p><h2>Since you’re here, have a look at my CV and get in touch.</h2><a className="cv-link" href="/rob-perry-cv.pdf" download><Download size={18}/> Download CV</a></div>
        <form onSubmit={submit}>
          <label>Name<input required name="name" autoComplete="name" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" /></label>
          <label>What are you working on?<textarea required name="message" rows={5}/></label>
          <button type="submit">{sent ? "Message drafted — thank you" : "Send a message"}<ArrowRight size={17}/></button>
          <p className="form-note">Preview form only. Submission delivery will be connected before launch.</p>
        </form>
      </section>
    </main>
    <footer><span>Rob Perry · Senior UX &amp; Product Designer</span><span>Designed with judgment. Built with help.</span></footer>

    {activeProject?.id === "dalhousie" ? <DalhousieCase onClose={() => setActiveProject(null)} /> : activeProject?.id === "tobytube" ? <TobytubeCase onClose={() => setActiveProject(null)} /> : activeProject && <div className={`case-overlay ${activeProject.tone === "personal" ? "personal-case" : ""}`} role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button className="close" onClick={() => setActiveProject(null)} aria-label="Close case study"><X/></button>
      <article className="case-study"><p className="project-context">{activeProject.client}</p><h2 id="case-title">{activeProject.title}</h2><p className="case-lede">{activeProject.summary}</p>
        {activeProject.image ? <img src={activeProject.image} alt="" /> : <div className="case-clock">00:06</div>}
        {activeProject.chapters.map(chapter => <section key={chapter.label}><h3>{chapter.label}</h3><p>{chapter.copy}</p></section>)}
        <aside><span>What it demonstrates</span><p>{activeProject.outcome}</p></aside>
        {(activeProject.id === "hilareads" || activeProject.id === "mycare") && <EmbeddedPrototype projectId={activeProject.id} />}
        <button className="project-link" onClick={() => setActiveProject(null)}>Back to the map <ArrowRight size={17}/></button>
      </article>
    </div>}
  </div>;
}

export default App;
