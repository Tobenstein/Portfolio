export type Project = {
  number: string; id: string; title: string; client: string; summary: string;
  outcome: string; image?: string; tone?: "personal"; chapters: { label: string; copy: string }[];
};

export const seriousProjects: Project[] = [
  {
    number: "01", id: "dalhousie", client: "Dalhousie · Medical education",
    title: "Designing Trauma-Informed Medical Education at Scale",
    summary: "Turning sensitive clinical knowledge into a repeatable system built around consent, clarity and patient agency.",
    outcome: "Exam time reduced from roughly six minutes to two; training time reduced from 90 minutes to 60.",
    image: "/portfolio/dal-exam-room.jpg",
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
    image: "/portfolio/mycare-dashboard-mobile.png",
    chapters: [
      { label: "The problem", copy: "Medical teams are expected to interpret fragmented patient data in the middle of a crisis. Patients face the same fragmentation at home, usually without clinical expertise." },
      { label: "The constraint", copy: "The product had to serve very different levels of knowledge, work across devices and make priority information obvious without oversimplifying it." },
      { label: "The system", copy: "I mapped patient and clinician tasks into shared, task-first flows, then designed one information model that reveals greater detail as expertise and context require it." },
    ],
  },
  {
    number: "03", id: "paladin", client: "Paladin · Crisis response",
    title: "Six Seconds or Dead: How Working in Crisis Response Influences My Designs",
    summary: "If you're reading this, know that i just pushed this update. This page will be updated in the next 7-10 business days (or whenever I get around to it. Just call me and I'll give you the gist of it)",
    outcome: "A design philosophy grounded in triage, calm communication and making the next action unmistakable.",
    chapters: [
      { label: "The situation", copy: "A heart attack, a fire alarm, a woman in labour and an armed threat do not arrive in a useful sequence. In crisis response, ambiguity is not an inconvenience. It is risk." },
      { label: "The lesson", copy: "You learn to separate urgency from noise, understand dependencies quickly and communicate without creating more panic. The clearest choice is rarely the loudest one." },
      { label: "The influence", copy: "That experience follows me into every product. I design hierarchy before decoration, failure states before happy paths and systems that remain understandable when the user has very little attention to spare." },
    ],
  },
];

export const personalProjects: Project[] = [
  {
    number: "04", id: "tobytube", client: "Personal project · Film systems", tone: "personal",
    title: "Tobytube Media Hub, or: Feeding Passion with Spite",
    summary: "A streaming platform that catalogues thousands of films because existing services kept making tiny, avoidable decisions that annoyed me.",
    outcome: "A complete media world: taxonomy, discovery, curation and an unreasonable amount of film knowledge in one system.",
    image: "/portfolio/tt-crowells-reimagined.webp",
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
    image: "/portfolio/hilareads-desktop.png",
    chapters: [
      { label: "The problem", copy: "Reading trackers can become sterile databases; social platforms can bury the books beneath performance. Hilareads needed to do both without becoming either." },
      { label: "The landscape", copy: "I connected goals, reviews, ratings, recommendations and community through reusable patterns that feel warm enough to browse and structured enough to remain useful." },
      { label: "The result", copy: "A product system with room for both analytics and intimacy. Early user feedback was overwhelmingly positive. Admittedly, she did marry me." },
    ],
  },
];


export const projectPaths: Record<string,string> = {dalhousie:"/case-studies/curriculum-design",mycare:"/case-studies/mycare",paladin:"/case-studies/crisis-response",tobytube:"/case-studies/tobytube",hilareads:"/case-studies/hilareads"};
