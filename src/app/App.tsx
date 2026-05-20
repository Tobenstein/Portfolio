import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Download,
  ExternalLink,
  Film,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

const profilePhoto = "/profile.jpg";
const fuzzyDashboard = "/mycare-dashboard-fuzzy.png";
const mobileDashboard = "/mycare-dashboard-mobile.png";
const moonGardenDesktop = "/moongarden-desktop.png";
const moonGardenMobile = "/moongarden-mobile.png";
const hilareadsDesktop = "/hilareads-desktop.png";
const hilareadsMobile = "/hilareads-mobile.png";
const productLabDesktop = "/product-lab-desktop.svg";
const productLabMobile = "/product-lab-mobile.svg";

type Project = {
  id: string;
  title: string;
  eyebrow: string;
  role: string;
  year: string;
  summary: string;
  impact: string;
  image?: string;
  mobileImage?: string;
  prototypeUrls?: {
    desktop?: string;
    mobile?: string;
  };
  tone: string;
  tags: string[];
  details: string[];
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    skills: string[];
    method: string[];
    impact: string[];
  };
};

const productShowcases: Project[] = [
  {
    id: "mycare",
    title: "MyCare",
    eyebrow: "Healthcare product system",
    role: "Lead UX Designer",
    year: "2025",
    summary:
      "A healthcare management platform designed to make care coordination, health records, and emergency response easier to process when seconds count.",
    impact: "Streamlining vital statistics across multiple user platforms.",
    image: fuzzyDashboard,
    mobileImage: mobileDashboard,
    prototypeUrls: {
      desktop: "https://mycare-theta.vercel.app",
      mobile: "https://mycare-theta.vercel.app",
    },
    tone: "care",
    tags: ["Healthcare", "Mobile UX", "Care coordination"],
    details: [
      "Structured complex medical information into scannable, task-first flows.",
      "Balanced patient confidence with clinical detail across responsive views.",
      "Designed for moments where trust, timing, and clarity matter more than novelty.",
    ],
    caseStudy: {
      overview:
        "MyCare creates a streamlined platform for patients and medical professionals to track vital statistics. In an environment where a few seconds can make all the difference, MyCare aggregates vitals via commonly accessible, inexpensive peripherals with the ability to track changes easily. The platform is ideal for emergency, inpatient, and at-home care, as it can share data easily from patient to doctor and vice versa.",
      challenge:
        "Healthcare systems are overburdened and underfunded. Medical professionals are frequently required to parse and analyse patient data in the midst of crises. The challenge was to reduce cognitive load, make priority tasks obvious, and keep the experience trustworthy across both mobile and dashboard views.",
      solution:
        "I designed a vital stats aggregator that localises patient data in a single interface with the ability to monitor changes over time. Vital stats can be taken by medical professionals in clinical settings, or by patients and care workers at home.",
      skills: ["Healthcare UX", "Information architecture", "Responsive product design", "Interaction design"],
      method: [
        "Mapped patient and medical team tasks into priority flows.",
        "Created patient-first workflow followed by expansion for medical team-exclusive functions.",
        "Created multiple use-case scenarios to prioritize task value.",
      ],
      impact: [
        "Reduced triage times for emergency rooms.",
        "Reduced necessity of in-clinic visits (and, therefore, ER wait times).",
        "Created a scalable system accessible to global healthcare markets with minimal implementation friction.",
      ],
    },
  },
  {
    id: "moongarden",
    title: "Moon Garden",
    eyebrow: "Wellness behavior design",
    role: "Product Designer",
    year: "2024",
    summary:
      "A wellness application that helps users approach difficult tasks while reinforcing healthy behaviours and a brighter outlook.",
    impact: "Turning task anxiety into a gentler guided practice ideal for daily use.",
    image: moonGardenDesktop,
    mobileImage: moonGardenMobile,
    prototypeUrls: {
      desktop: "https://moongarden-henna.vercel.app",
      mobile: "https://moongarden-henna.vercel.app",
    },
    tone: "garden",
    tags: ["Wellness", "Behavior design", "Mobile UI"],
    details: [
      "Designed a calmer interaction model around motivation, reflection, and progress.",
      "Created layered desktop and mobile presentation moments for product storytelling.",
      "Used visual pacing and gentle feedback to keep the experience supportive.",
    ],
    caseStudy: {
      overview:
        "MoonGarden is a wellness app built around the idea that difficult tasks are easier to approach when their feedback and enforcement systems are supportive rather than punitive. Our users need to feel a sense of accomplishment and positive encouragement to tackle their challenges, not threats of streaks ending. MoonGarden turns task management into a gentle ritual of progress, reflection, and encouragement.",
      challenge:
        "Many productivity and wellness tools unintentionally make users feel rushed, pressured, or that they are falling behind. The challenge was to change focus to users who feel overwhelmed while still providing structure and encouragement to complete self-set tasks.",
      solution:
        "I built a reinforcement-based mobile-first experience that pairs task tracking with a calming environment and visual language. The garden metaphor makes progress visible, measurable, and meaningful without becoming another task in and of itself.",
      skills: ["Behavior design", "Mobile UX", "Visual design", "Motivation systems"],
      method: [
        "Defined the emotional tone before designing the task mechanics.",
        "Designed short-session flows for adding, completing, and reflecting on tasks.",
        "Balanced encouragement, clarity, and restraint in the interface feedback.",
      ],
      impact: [
        "Created a wellness experience that supports action without shame or increased anxiety.",
        "Turned task anxiety into a calmer, more self-guided daily interaction.",
        "Demonstrated how product tone can shape user behavior and confidence.",
      ],
    },
  },
  {
    id: "hilareads",
    title: "Hilareads",
    eyebrow: "Social reading platform",
    role: "UX/UI Designer",
    year: "2024",
    summary:
      "A personalised reading platform that connects book lovers through reviews, recommendations, analytics, and social discovery.",
    impact: "Unified discovery, sharing, and community building in one system.",
    image: hilareadsDesktop,
    mobileImage: hilareadsMobile,
    prototypeUrls: {
      desktop: "https://www.hilareads.com",
      mobile: "https://www.hilareads.com",
    },
    tone: "reads",
    tags: ["E-reading", "Social UX", "Design system"],
    details: [
      "Mapped the relationship between reading goals, discovery, and social proof.",
      "Created screen patterns for tracking, recommendations, and review flows.",
      "Kept the interface warm and browsable without losing product utility.",
    ],
    caseStudy: {
      overview:
        "Hilareads is a combination personal reading tracker and branding website designed for tracking books, sharing reviews, and building a warmer “sharing community” for bibliophiles. It brings together personal progress, recommendations, and a sense of community in a unified hub.",
      challenge:
        "Reading products, especially trackers and analytics-based platforms, can become overly utilitarian or too social to remain useful, and therefore accelerate drift from the platform’s mission statement. The challenge was to support browsing, tracking, reviewing, and recommendations without letting any one detail overwhelm the experience.",
      solution:
        "I designed a platform that acts as a personal website with a sense of intimacy while also blending the analytics component, tracking current reads, reviews, ratings, recommendations, and community moments while keeping the environment warm, friendly, and bookish.",
      skills: ["Social product UX", "Design systems", "Content hierarchy", "Responsive UI"],
      method: [
        "Mapped core reading behaviors and desired analytics across tracking, discovery, and review flows.",
        "Designed reusable screen patterns for cards, lists, ratings, and social analytics.",
        "Balanced personality with utility so the product feels browsable and practical.",
      ],
      impact: [
        "Unified reading, reviewing, and recommendation flows into a unified ecosystem.",
        "Created a flexible design language for a community-driven reading platform.",
        "Showed how social features can support discovery without overwhelming the user.",
        "Overwhelmingly positive user feedback (she married me).",
      ],
    },
  },
  {
    id: "product-lab",
    title: "Product Lab",
    eyebrow: "Coming soon",
    role: "Works in Progress",
    year: "In development",
    summary:
      "New prototypes and case studies are always in development. This is just a little taste of what's to come (and a placeholder, let's be honest).",
    impact: "Get under the surface of my design process without having to actually examine my brain.",
    image: productLabDesktop,
    mobileImage: productLabMobile,
    tone: "lab",
    tags: ["In development", "In progress", "In-teractive prototypes"],
    details: [
      "Additional product showcases are currently being shaped, tested, and refined.",
      "Upcoming work will include fuller process notes, prototypes, and design rationale.",
      "The goal is to show live product psychology without padding my portfolio with pointless noise.",
    ],
    caseStudy: {
      overview:
        "This space is reserved for active product work that is still being designed, tested, or prepared for a fuller public case study. Rather than leaving a mystery tile or overexplaining unfinished work, this preview signals that more interactive product work is on the way.",
      challenge:
        "The challenge is presenting work in progress honestly. A portfolio should show momentum, but it should not ask visitors to squint at an empty box and imagine the value for themselves.",
      solution:
        "I created a lightweight preview page with abstract interface visuals and clear coming-soon framing. It gives visitors a sense of continued product development while keeping the full case-study space available for stronger evidence later.",
      skills: ["Product strategy", "UX direction", "Prototype planning", "Visual systems"],
      method: [
        "Identify which emerging products have enough substance to become full showcases.",
        "Prepare prototype and case-study materials as the work matures.",
        "Keep the portfolio current without overstating unfinished projects.",
      ],
      impact: [
        "Signals that new interactive product work is actively in progress.",
        "Keeps the showcase section feeling alive without relying on empty placeholders.",
        "Creates a clear home for future product pages when the supporting details are ready.",
      ],
    },
  },
];

const caseStudies: Project[] = [
  {
    id: "newcomer",
    title: "Newcomer Workforce Integration",
    eyebrow: "0 to 1 public-service platform",
    role: "Lead Product Designer",
    year: "2024",
    summary:
      "A guided platform helping newcomers to Canada navigate fragmented employment systems and enter the workforce faster.",
    impact: "Raised program completion by roughly 30% and supported 500+ users.",
    tone: "newcomer",
    tags: ["Research", "Information architecture", "Public service"],
    details: [
      "Conducted 25+ interviews with newcomers and employment advisors.",
      "Reframed static resources into a structured journey from arrival to job readiness.",
      "Used progressive disclosure to reduce overwhelm and improve task completion.",
    ],
  },
  {
    id: "clinical",
    title: "Trauma-Informed Clinical Examination System",
    eyebrow: "High-stakes service design",
    role: "Lead Product Designer",
    year: "2018-2024",
    summary:
      "A scalable, evidence-based training system for safer, clearer, trauma-sensitive clinical examinations.",
    impact: "Reduced exam time from about 6 minutes to about 2 and training time from 90 to 60 minutes.",
    tone: "clinical",
    tags: ["Healthcare", "Service design", "Training systems"],
    details: [
      "Translated qualitative insight into repeatable clinical protocols.",
      "Designed interaction patterns around consent, agency, communication, and touch mechanics.",
      "Helped standardize practices adopted by hundreds of medical professionals.",
    ],
  },
  {
    id: "tcg",
    title: "Mobile Trading Card Game Platform",
    eyebrow: "Engagement and retention systems",
    role: "Lead Product Designer",
    year: "2023",
    summary:
      "A mobile-first TCG concept built around collection, short-session battles, progression, and replayability.",
    impact: "Defined a full product design system, gameplay framework, and release strategy.",
    tone: "tcg",
    tags: ["Game UX", "Retention", "Product strategy"],
    details: [
      "Analyzed leading TCGs to separate familiar table stakes from useful novelty.",
      "Designed the collect, customize, battle, reward, progress loop for mobile sessions.",
      "Balanced casual onboarding with enough depth for long-term investment.",
    ],
  },
  {
    id: "talknow",
    title: "TalkNow Global eLearning",
    eyebrow: "Multi-market research platform",
    role: "Lead UX Researcher and Product Designer",
    year: "2020",
    summary:
      "A large-scale eLearning platform shaped by research across East and Southeast Asian markets.",
    impact: "Led 12 researchers and built foundational personas for a 17-country launch strategy.",
    tone: "talknow",
    tags: ["UX research", "eLearning", "Global scale"],
    details: [
      "Mapped learner, instructor, and subscriber needs across varied cultural contexts.",
      "Balanced usability, security, engagement, localization, and platform familiarity.",
      "Advocated for stronger privacy standards when product incentives conflicted with user protection.",
    ],
  },
];

const experience = [
  {
    title: "Senior Product Designer (UX & Web)",
    company: "Soul Atlas | Dublin, Ireland",
    period: "2026",
  },
  {
    title: "Senior Product Designer (UX)",
    company: "Threshold Training Associates | Prague, CZ",
    period: "2023-2025",
  },
  {
    title: "Product Designer (UX), Medical Education Platforms",
    company: "Dalhousie University, Dept. of Medicine",
    period: "2018-2024",
  },
  {
    title: "Lead Product Designer (UX), Newcomer Integration Platform",
    company: "Immigration Services Association of Nova Scotia | Canada",
    period: "2022-2023",
  },
  {
    title: "Lead UX Designer (MedTech / EdTech Products)",
    company: "Tobenstein Technologies | East Asia / Canada",
    period: "2018-2022",
  },
  {
    title: "UX Designer",
    company: "KNOX Academy | South Korea",
    period: "2017-2018",
  },
  {
    title: "Operations Lead, Emergency Response and Communications",
    company: "Paladin Security & Emergency Response | Canada",
    period: "2010-2014",
  },
];

const stats = [
  ["9+", "years translating complex systems"],
  ["25+", "unique products developed in multiple industries"],
  ["500+", "users supported by workforce integration"],
  ["65%", "clinical examination time reduction"],
];

function ProductPage({
  product,
  relatedProducts,
  onBack,
  onOpenProduct,
}: {
  product: Project;
  relatedProducts: Project[];
  onBack: () => void;
  onOpenProduct: (id: string) => void;
}) {
  const [prototypeMode, setPrototypeMode] = useState<"desktop" | "mobile">(
    product.prototypeUrls?.mobile ? "mobile" : "desktop",
  );
  const prototypeUrl =
    prototypeMode === "mobile" ? product.prototypeUrls?.mobile : product.prototypeUrls?.desktop;
  const hasDesktopPrototype = Boolean(product.prototypeUrls?.desktop);
  const hasMobilePrototype = Boolean(product.prototypeUrls?.mobile);
  const hasPrototype = hasDesktopPrototype || hasMobilePrototype;

  useEffect(() => {
    document.title = `${product.title} - Rob Perry`;
  }, [product.title]);

  useEffect(() => {
    setPrototypeMode(product.prototypeUrls?.mobile ? "mobile" : "desktop");
  }, [product.id, product.prototypeUrls?.desktop, product.prototypeUrls?.mobile]);

  return (
    <div className="cinematic-site product-page">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-nav">
        <button className="brand-lockup" onClick={onBack} aria-label="Back to portfolio">
          <span className="brand-mark">RP</span>
          <span>Rob Perry</span>
          <span className="brand-title">Senior UX Director & Product Designer</span>
        </button>
        <nav aria-label="Primary navigation">
          <button onClick={() => { onBack(); requestAnimationFrame(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" })); }}>Work</button>
          <button onClick={() => { onBack(); requestAnimationFrame(() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" })); }}>Studies</button>
          <button onClick={() => { onBack(); requestAnimationFrame(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })); }}>About Me</button>
          <button onClick={() => { onBack(); requestAnimationFrame(() => document.getElementById("cv")?.scrollIntoView({ behavior: "smooth", block: "start" })); }}>CV</button>
          <button onClick={() => { onBack(); requestAnimationFrame(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })); }}>Contact</button>
        </nav>
      </header>

      <main>
        <section className="product-hero">
          <button className="back-link" onClick={onBack}>
            <ArrowLeft size={18} /> Back to portfolio
          </button>

          <div className="product-hero-grid">
            <div className="product-hero-copy">
              <p className="kicker"><MonitorSmartphone size={16} /> {hasPrototype ? "Interactive product showcase" : "Product showcase preview"}</p>
              <h1>{product.title}</h1>
              <p>{product.summary}</p>
              <div className="tag-row">
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className={`product-device-card tone-${product.tone}`}>
              {product.image && <img className="stage-desktop" src={product.image} alt={`${product.title} interface`} />}
              {product.mobileImage && <img className="stage-mobile" src={product.mobileImage} alt={`${product.title} mobile interface`} />}
            </div>
          </div>
        </section>

        <section className="product-case-section">
          <div className="section-heading compact">
            <p className="kicker"><BookOpen size={16} /> Case study</p>
            <h2>{product.impact}</h2>
          </div>

          {product.caseStudy && (
            <>
              <div className="product-story-grid">
                <article className="product-story-card is-large">
                  <h3>Overview</h3>
                  <div className="overview-meta">
                    <span>{product.role}</span>
                    <span>{product.year}</span>
                  </div>
                  <p>{product.caseStudy.overview}</p>
                </article>
                <article className="product-story-card">
                  <h3>Challenge</h3>
                  <p>{product.caseStudy.challenge}</p>
                </article>
                <article className="product-story-card">
                  <h3>Solution</h3>
                  <p>{product.caseStudy.solution}</p>
                </article>
              </div>

              <div className="product-case-grid">
                <div>
                  <h3>Skills</h3>
                  <ul>
                    {product.caseStudy.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Method</h3>
                  <ul>
                    {product.caseStudy.method.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-grid-wide">
                  <h3>Impact</h3>
                  <ul>
                    {product.caseStudy.impact.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </section>

        <section className="prototype-section">
          <div className="section-heading compact prototype-heading">
            <div>
              <p className="kicker"><ExternalLink size={16} /> {hasPrototype ? "Prototype" : "Coming soon"}</p>
              <h2>{hasPrototype ? "Try it yourself!" : "Prototype coming soon"}</h2>
            </div>
            {hasPrototype && (
              <div className="prototype-controls">
                <div className="prototype-toggle" aria-label="Prototype view mode">
                  <button
                    className={prototypeMode === "desktop" ? "is-active" : ""}
                    disabled={!hasDesktopPrototype}
                    onClick={() => setPrototypeMode("desktop")}
                  >
                    <Monitor size={16} /> Desktop
                  </button>
                  <button
                    className={prototypeMode === "mobile" ? "is-active" : ""}
                    disabled={!hasMobilePrototype}
                    onClick={() => setPrototypeMode("mobile")}
                  >
                    <Smartphone size={16} /> Mobile
                  </button>
                </div>
                {prototypeUrl && (
                  <a className="prototype-open-link" href={prototypeUrl} target="_blank" rel="noreferrer">
                    Open prototype <ExternalLink size={16} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className={`prototype-frame ${prototypeMode === "mobile" ? "is-mobile" : "is-desktop"}`}>
            {hasPrototype && prototypeUrl ? (
              <iframe
                src={prototypeUrl}
                title={`${product.title} ${prototypeMode} interactive prototype`}
                allowFullScreen
              />
            ) : (
              <div className="prototype-placeholder">
                <MonitorSmartphone size={28} />
                <h3>Interactive prototype in development</h3>
                <p>
                  This product is still being shaped. A hands-on prototype will be added here when there is enough
                  substance to make the interaction worth your time.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="related-products">
          <div className="section-heading compact related-heading">
            <p className="kicker"><Layers3 size={16} /> More product showcases</p>
            <h2>See more</h2>
          </div>
          <div className="related-product-grid">
            {relatedProducts.map((related) => (
              <button className={`related-product tone-${related.tone}`} key={related.id} onClick={() => onOpenProduct(related.id)}>
                <span>{related.eyebrow}</span>
                <strong>{related.title}</strong>
                <ArrowRight size={18} />
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [activeProductId, setActiveProductId] = useState<string | null>(() =>
    window.location.hash.startsWith("#/work/") ? window.location.hash.replace("#/work/", "") : null,
  );
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    document.title = "Rob Perry - UX Director";

    const onHashChange = () => {
      const productId = window.location.hash.startsWith("#/work/")
        ? window.location.hash.replace("#/work/", "")
        : null;
      setActiveProductId(productId);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const onScroll = () => {
      setScrollY(window.scrollY);

      const center = window.innerHeight * 0.54;
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      projectRefs.current.forEach((element, index) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height * 0.5 - center);
        if (distance < closestDistance) {
          closest = index;
          closestDistance = distance;
        }
      });

      setActiveProject(closest);
    };

    onScroll();
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const active = productShowcases[activeProject];
  const progress = useMemo(
    () => Math.round(((activeProject + 1) / productShowcases.length) * 100),
    [activeProject],
  );
  const activeProduct = productShowcases.find((project) => project.id === activeProductId);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openProduct = (id: string) => {
    window.location.hash = `/work/${id}`;
  };

  const closeProduct = () => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setActiveProductId(null);
  };

  if (activeProduct) {
    return (
      <ProductPage
        product={activeProduct}
        relatedProducts={productShowcases.filter((project) => project.id !== activeProduct.id)}
        onBack={closeProduct}
        onOpenProduct={openProduct}
      />
    );
  }

  return (
    <div className="cinematic-site">
      <div className="ambient ambient-a" style={{ transform: `translate3d(0, ${scrollY * 0.04}px, 0)` }} />
      <div className="ambient ambient-b" style={{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }} />

      <header className="site-nav">
        <button className="brand-lockup" onClick={() => scrollTo("top")} aria-label="Go to top">
          <span className="brand-mark">RP</span>
          <span>Rob Perry</span>
          <span className="brand-title">Senior UX Director & Product Designer</span>
        </button>
        <nav aria-label="Primary navigation">
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("case-studies")}>Studies</button>
          <button onClick={() => scrollTo("about")}>About Me</button>
          <button onClick={() => scrollTo("cv")}>CV</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy" style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}>
            <p className="kicker"><Sparkles size={16} /> UX Director / Senior Product Designer</p>
            <h1>Designing accessible, intuitive systems for complex, high-stakes environments.</h1>
            <p className="hero-lede">
              I translate the chaos of healthcare, learning & development, migrant integration, and consumer products
              into straightfoward, trustworthy, dependable experiences that stand up to real-world pressure.
            </p>
            <div className="hero-actions">
              <button className="primary-action" onClick={() => scrollTo("work")}>
                View selected work <ArrowRight size={18} />
              </button>
              <a className="secondary-action" href="/rob-perry-cv.pdf" download>
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          <div className="hero-stage" style={{ transform: `translate3d(0, ${scrollY * 0.03}px, 0)` }}>
            <div className="portrait-panel">
              <img src={profilePhoto} alt="Rob Perry" />
              <div>
                <span>9+ years of diverse international experience.</span>
                <strong>Ex-first responder designing systems where small details have human consequences.</strong>
              </div>
            </div>
            <div className="screen-stack">
              <img className="desktop-screen" src={fuzzyDashboard} alt="MyCare dashboard interface" />
              <img className="phone-screen phone-one" src={mobileDashboard} alt="MyCare mobile interface" />
              <img className="phone-screen phone-two" src={moonGardenMobile} alt="Moon Garden mobile interface" />
            </div>
          </div>

          <button className="scroll-cue" onClick={() => scrollTo("work")} aria-label="Scroll to selected work">
            <ChevronDown size={22} />
          </button>
        </section>

        <section className="stats-strip" aria-label="Portfolio highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="project-theater" id="work">
          <div className="section-heading">
            <p className="kicker"><MonitorSmartphone size={16} /> Selected work</p>
            <h2>Product Showcase</h2>
            <p className="section-subtitle">(with interactive prototypes)</p>
          </div>

          <div className="theater-grid">
            <aside className="project-stage" aria-live="polite">
              <div className={`stage-visual tone-${active.tone}`}>
                {active.image ? (
                  <>
                    <img className="stage-desktop" src={active.image} alt={`${active.title} desktop interface`} />
                    {active.mobileImage && (
                      <img className="stage-mobile" src={active.mobileImage} alt={`${active.title} mobile interface`} />
                    )}
                  </>
                ) : (
                  <div className="abstract-system">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
              <div className="stage-meta">
                <span>{String(activeProject + 1).padStart(2, "0")} / {String(productShowcases.length).padStart(2, "0")}</span>
                <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
              </div>
            </aside>

            <div className="project-list">
              {productShowcases.map((project, index) => (
                <article
                  className={`project-panel ${index === activeProject ? "is-active" : ""}`}
                  key={project.id}
                  ref={(element) => {
                    projectRefs.current[index] = element;
                  }}
                >
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span>{project.year}</span>
                  </div>
                  <p className="project-role">{project.role}</p>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <button className="project-open" onClick={() => openProduct(project.id)}>
                    Open product page <ArrowRight size={18} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-study-section" id="case-studies">
          <div className="section-heading compact research-heading">
            <p className="kicker"><BookOpen size={16} /> Research case studies</p>
            <h2>People-first Research Projects</h2>
            <p className="section-subtitle">across multiple industries</p>
          </div>

          <div className="case-study-rail-wrap">
            <div className="case-study-rail" aria-label="Case study carousel">
              {caseStudies.map((study) => (
                <article className={`case-study-card tone-${study.tone}`} key={study.id}>
                  <div>
                    <p className="project-eyebrow">{study.eyebrow}</p>
                    <div className="project-title-row">
                      <h3>{study.title}</h3>
                      <span>{study.year}</span>
                    </div>
                    <p className="project-role">{study.role}</p>
                    <p className="project-summary">{study.summary}</p>
                  </div>
                  <button className="case-study-more" onClick={() => setActiveCaseStudy(study)}>
                    More details <ArrowRight size={18} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cv-section" id="cv">
          <div className="section-heading compact cv-heading">
            <div>
              <p className="kicker"><UserRound size={16} /> Work history</p>
              <h2>Experience across healthcare, education, public service, and consumer products.</h2>
            </div>
            <a className="secondary-action cv-download" href="/rob-perry-cv.pdf" download>
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={`${item.title}-${item.period}`}>
                <span>{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="approach-section" id="about">
          <div className="section-heading approach-heading">
            <p className="kicker"><Layers3 size={16} /> About Me</p>
            <h2>A decade of great experiences worldwide</h2>
          </div>

          <div className="approach-grid">
            <div>
              <Globe2 size={22} />
              <h3>10 years of international experience</h3>
              <p>
                Hands-on, end-to-end design and development in the EU, North America, East Asia, and multiple
                countries therein. As a native English speaker with skills in French, Dutch, and some German, I thrive
                in international client-facing environments.
              </p>
            </div>
            <div>
              <Palette size={22} />
              <h3>A diverse portfolio</h3>
              <p>
                I have worked with a smorgasbord of diverse products, including healthcare, education, gaming, finance,
                and more. I love being a part of the whole development lifecycle, not just the person who fancies up the
                UI.
              </p>
            </div>
            <div>
              <Film size={22} />
              <h3>Low-ego, low-jargon</h3>
              <p>
                I'm a lover of the arts, a cinephile, a writer, and former professional wrestler, which means I have a
                deep and thorough passion for and understanding of storytelling. I live by the ethos "lowbrow doesn't
                have to mean low quality". We can absolutely mix stupid fun with S-tier quality products.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="kicker"><Mail size={16} /> Contact</p>
            <h2>Have a complex product, service, or system? Let me help make it simple.</h2>
            <p>
              I am a wizard in healthcare, learning & development, gaming, and a lot more.
            </p>
          </div>

          <div className="contact-actions">
            <span><Mail size={18} /> You can reach me at:</span>
            <a href="mailto:Robperryinc@protonmail.com"><Mail size={18} /> Robperryinc@protonmail.com</a>
            <a href="https://linkedin.com/in/robperryinc" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> linkedin.com/in/robperryinc
            </a>
          </div>
        </section>
      </main>

      {activeCaseStudy && (
        <div className="case-study-overlay" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
          <button className="overlay-scrim" aria-label="Close case study details" onClick={() => setActiveCaseStudy(null)} />
          <article className={`case-study-modal tone-${activeCaseStudy.tone}`}>
            <button className="modal-close" onClick={() => setActiveCaseStudy(null)} aria-label="Close details">
              <X size={20} />
            </button>
            <p className="project-eyebrow">{activeCaseStudy.eyebrow}</p>
            <div className="project-title-row">
              <h3 id="case-study-title">{activeCaseStudy.title}</h3>
              <span>{activeCaseStudy.year}</span>
            </div>
            <p className="project-role">{activeCaseStudy.role}</p>
            <p className="project-summary">{activeCaseStudy.summary}</p>
            <p className="project-impact">{activeCaseStudy.impact}</p>
            <div className="tag-row">
              {activeCaseStudy.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <ul>
              {activeCaseStudy.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </div>
  );
}
