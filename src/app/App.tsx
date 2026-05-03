import { useState, useEffect, useRef } from "react";
import { Film, FileText, User, Clapperboard, BookOpen, ChevronDown, Download, ArrowLeft, Mail, Phone, MapPin, Linkedin, MonitorSmartphone } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ContactForm } from "./components/ContactForm";

// Image paths - files are stored in /public folder
const profilePhoto = "/profile.jpg";
const fuzzyDashboard = "/mycare-dashboard-fuzzy.png";
const mobileDashboard = "/mycare-dashboard-mobile.png";
const moonGardenDesktop = "/moongarden-desktop.png";
const moonGardenMobile = "/moongarden-mobile.png";
const hilareadsDesktop = "/hilareads-desktop.png";
const hilareadsMobile = "/hilareads-mobile.png";

type Section = "products" | "research" | "cv" | "about" | "contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top when section changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  // Set page title
  useEffect(() => {
    document.title = "Rob Perry, UX Director";
  }, []);

  return (
    <div className="size-full flex flex-col md:flex-row bg-background text-foreground film-grain vignette">
      {/* Sidebar - Left 1/4 on desktop, top 1/4 on mobile */}
      <aside className="md:w-1/4 h-1/4 md:h-full border-b md:border-b-0 md:border-r border-primary/30 flex flex-col relative overflow-hidden spotlight">
        {/* Film strip decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/20 flex z-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-background" />
          ))}
        </div>
        
        <div className="p-4 lg:p-8 pt-6 lg:pt-12 relative z-10 overflow-y-auto">
          {/* Header */}
          <div className="mb-6 lg:mb-12">
            <div className="flex items-center gap-3 mb-0.5">
              <div className="relative flex-shrink-0 self-start">
                <Film className="w-6 h-6 lg:w-8 lg:h-8 text-primary film-reel-animate" />
                <div className="absolute inset-0 blur-sm">
                  <Film className="w-6 h-6 lg:w-8 lg:h-8 text-primary opacity-30" />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-primary tracking-wide text-3xl lg:text-5xl leading-none mb-1 whitespace-nowrap" style={{ fontFamily: "'Film', sans-serif", letterSpacing: '0.02em' }}>Rob Perry</h1>
                <p className="text-xs lg:text-sm text-muted-foreground">UX Director</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic hidden md:block ml-9 lg:ml-11">
              "A portfolio in three acts"
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 md:grid-cols-1 gap-2 lg:gap-3">
            <button
              onClick={() => setActiveSection("about")}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all flex items-center gap-2 lg:gap-3 text-sm lg:text-base ${
                activeSection === "about"
                  ? "bg-primary text-primary-foreground golden-glow"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              <User className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate lg:inline">About Me</span>
            </button>
            
            <button
              onClick={() => setActiveSection("research")}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all flex items-center gap-2 lg:gap-3 text-sm lg:text-base ${
                activeSection === "research"
                  ? "bg-primary text-primary-foreground golden-glow"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate lg:inline">Research Projects</span>
            </button>
            
            <button
              onClick={() => setActiveSection("products")}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all flex items-center gap-2 lg:gap-3 text-sm lg:text-base ${
                activeSection === "products"
                  ? "bg-primary text-primary-foreground golden-glow"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              <MonitorSmartphone className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate lg:inline">Designed Products</span>
            </button>
            
            <button
              onClick={() => setActiveSection("cv")}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all flex items-center gap-2 lg:gap-3 text-sm lg:text-base ${
                activeSection === "cv"
                  ? "bg-primary text-primary-foreground golden-glow"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              <FileText className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate lg:inline">Curriculum Vitae</span>
            </button>

            <button
              onClick={() => setActiveSection("contact")}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-all flex items-center gap-2 lg:gap-3 text-sm lg:text-base ${
                activeSection === "contact"
                  ? "bg-primary text-primary-foreground golden-glow"
                  : "text-foreground hover:bg-primary/10"
              }`}
            >
              <Mail className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate lg:inline">Contact</span>
            </button>
          </nav>

          {/* Cinephile quote */}
          <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-primary/20 hidden md:block">
            <Clapperboard className="w-5 h-5 text-primary mb-3 opacity-70" />
            <p className="text-xs text-muted-foreground italic">
              "The television screen is the retina of the mind's eye. Therefore the television screen is part of the physical structure of the brain. Therefore whatever appears on the television screen emerges as raw experience for those who watch it. Therefore television is reality, and reality is less than television."
            </p>
            <p className="text-xs text-primary mt-1">— Prof. Brian O'Blivion</p>
          </div>
        </div>

        {/* Film strip decoration bottom */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 flex z-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-background" />
          ))}
        </div>
      </aside>

      {/* Main Content - Right 3/4 on desktop, bottom 3/4 on mobile */}
      <main className="flex-1 overflow-y-auto relative z-10" ref={mainRef}>
        <div className="min-h-full p-6 lg:p-12">
          <div className="fade-in-up">
            {activeSection === "about" && <AboutSection />}
            {activeSection === "products" && <ProductsSection />}
            {activeSection === "research" && <ResearchSection />}
            {activeSection === "cv" && <CVSection />}
            {activeSection === "contact" && <ContactSection />}
          </div>
        </div>
      </main>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm mb-4 rounded">
          ACT I: INTRODUCTION
        </div>
        
        {/* Title Card Style Contact */}
        <div className="border-2 border-primary/30 rounded-lg p-4 lg:p-8 bg-gradient-to-r from-primary/5 to-primary/10 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded overflow-hidden border-4 border-primary/40">
                <img
                  src={profilePhoto}
                  alt="Rob Perry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact Info - Title Card Style */}
            <div className="flex-1 min-w-0 w-full">
              <div className="mb-4 lg:mb-6 text-center md:text-left">
                <h3 className="text-primary text-5xl lg:text-7xl tracking-tight mb-1" style={{ fontFamily: "'Acheader', sans-serif", letterSpacing: '0.05em' }}>
                  ROB PERRY
                </h3>
                <div className="text-xs lg:text-sm text-foreground uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                  <p>Senior Product Designer | Ex-First Responder</p>
                  <p>Designing Systems for Complex, High-Stakes Experiences</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <a href="mailto:Robperryinc@protonmail.com" className="text-xs uppercase tracking-wide text-foreground hover:text-primary transition-colors truncate" style={{ letterSpacing: '0.05em' }}>
                    Robperryinc@protonmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-2 min-w-0">
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <a href="tel:+420734886938" className="text-xs uppercase tracking-wide text-foreground hover:text-primary transition-colors whitespace-nowrap" style={{ letterSpacing: '0.05em' }}>
                    (420) 734 886 938
                  </a>
                </div>
                
                <div className="flex items-center gap-2 min-w-0">
                  <Linkedin className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <a href="https://linkedin.com/in/robperryinc" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wide text-foreground hover:text-primary transition-colors truncate" style={{ letterSpacing: '0.05em' }}>
                    linkedin.com/in/robperryinc
                  </a>
                </div>
                
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                  <span className="text-xs uppercase tracking-wide text-foreground truncate" style={{ letterSpacing: '0.05em' }}>
                    Prague, Czech Republic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-4xl mb-4">About Me</h2>
        <div className="h-1 w-24 bg-primary rounded-full" />
      </div>
      
      <div className="space-y-6">
        <p className="text-xl leading-relaxed font-medium">
          I design systems that help people navigate complex, high-stakes moments—where clarity, trust, and timing matter most.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          My work spans healthcare, global learning platforms, and consumer products, with a focus on turning complex processes into clear, actionable experiences. I've led design across trauma-informed clinical systems, migrant integration platforms, and engagement-driven digital products—always grounded in real user behavior and measurable outcomes.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Before design, I worked as a first responder in one of Eastern Canada's largest hospital networks. That experience continues to shape how I think: decisions happen under pressure, systems need to hold up in the real world, and small details can have outsized human impact.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          I approach design with the same principles found in great films—clarity, intent, and timing. Every interaction should serve a purpose, reduce friction, and move the user forward.
        </p>

        <p className="text-lg leading-relaxed">
          This portfolio is a selection of work focused on systems, behavior, and outcomes. I care less about surface-level polish and more about whether a system works when it matters—under pressure, at scale, and for the people relying on it.
        </p>

        <p className="text-lg leading-relaxed">
          Click on Research Projects to get started.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-primary/20">
          <div>
            <h3 className="text-primary mb-2">Skills</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• User Research & Testing</li>
              <li>• Information Architecture</li>
              <li>• Interaction Design</li>
              <li>• Prototyping & Wireframing</li>
              <li>• Design Systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary mb-2">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Figma, Sketch, Adobe XD</li>
              <li>• Principle, ProtoPie</li>
              <li>• Miro, FigJam</li>
              <li>• UserTesting, Maze</li>
              <li>• HTML/CSS, React basics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when navigating between list and detail views
  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after render
    requestAnimationFrame(() => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
      }
    });
  }, [selectedProduct]);

  const products = [
    {
      id: "mycare",
      title: "MyCare",
      role: "Lead UX Designer",
      year: "2025",
      description: "A comprehensive healthcare management platform designed to streamline patient care coordination and medical record access.",
      tags: ["Healthcare", "Mobile Design", "User Research"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwfGVufDF8fHx8MTc2NjA3NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "moongarden",
      title: "Moon Garden",
      role: "Product Designer",
      year: "2024",
      description: "A wellness application that helps users manage difficult tasks while reinforcing healthy behaviour and promoting a positive outlook.",
      tags: ["Wellness", "Mobile Design", "UI/UX"],
      image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwYXBwfGVufDF8fHx8MTc2NjA1NTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "hilareads",
      title: "Hilareads",
      role: "UX/UI Designer",
      year: "2024",
      description: "A personalised reading platform that brings together book lovers through social features and acts as a nexus for reviews, recommendations, and tracking.",
      tags: ["E-Reading", "Social Features", "Design System"],
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYXBwfGVufDF8fHx8MTc2NjA2MTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // If a product is selected, show its detail page
  if (selectedProduct) {
    return (
      <ProductDetail 
        productId={selectedProduct} 
        onBack={() => setSelectedProduct(null)} 
      />
    );
  }

  // Otherwise show the product list
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm mb-4 rounded">
          ACT III: THE FEATURES
        </div>
        <h2 className="text-4xl mb-4">Designed Products</h2>
        <div className="h-1 w-24 bg-primary rounded-full" />
      </div>
      
      <p className="text-muted-foreground mb-12">
        A curated selection of products I've designed, each with its own story to tell.
      </p>

      <div className="space-y-12">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setSelectedProduct(product.id)}
            className="w-full border border-primary/20 rounded-lg overflow-hidden bg-card hover:border-primary/40 transition-all hover-lift cursor-pointer text-left"
          >
            {product.id === "mycare" ? (
              // MyCare specific hero with layered images
              <div className="relative aspect-video bg-secondary overflow-hidden">
                {/* Background fuzzy dashboard */}
                <img 
                  src={fuzzyDashboard} 
                  alt="MyCare Dashboard Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Centered mobile dashboard overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={mobileDashboard} 
                    alt="MyCare Mobile Dashboard"
                    className="h-full w-auto max-w-full object-contain"
                    style={{ maxHeight: '90%' }}
                  />
                </div>
              </div>
            ) : product.id === "moongarden" ? (
              // Moon Garden specific hero with layered images
              <div className="relative aspect-video bg-secondary overflow-hidden">
                {/* Background desktop image with blur */}
                <img 
                  src={moonGardenDesktop} 
                  alt="Moon Garden Desktop Background"
                  className="absolute inset-0 w-full h-full object-cover blur-sm opacity-60"
                />
                {/* Centered mobile overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={moonGardenMobile} 
                    alt="Moon Garden Mobile"
                    className="h-full w-auto max-w-full object-contain"
                    style={{ maxHeight: '90%' }}
                  />
                </div>
              </div>
            ) : product.id === "hilareads" ? (
              // Hilareads specific hero with layered images
              <div className="relative aspect-video bg-secondary overflow-hidden">
                {/* Background desktop image with blur */}
                <img 
                  src={hilareadsDesktop} 
                  alt="Hilareads Desktop Background"
                  className="absolute inset-0 w-full h-full object-cover blur-sm opacity-60"
                />
                {/* Centered mobile overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={hilareadsMobile} 
                    alt="Hilareads Mobile"
                    className="h-full w-auto max-w-full object-contain"
                    style={{ maxHeight: '90%' }}
                  />
                </div>
              </div>
            ) : (
              // Default image for other products
              <div className="aspect-video overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl mb-1">{product.title}</h3>
                  <p className="text-sm text-primary">{product.role} • {product.year}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-primary text-sm flex items-center gap-2">
                View Project Details →
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductDetail({ productId, onBack }: { productId: string; onBack: () => void }) {
  // Scroll to top when component mounts
  useEffect(() => {
    // Try multiple methods to ensure scroll works
    const mainElement = document.querySelector('main');
    if (mainElement) {
      // Immediate scroll
      mainElement.scrollTop = 0;
      mainElement.scrollTo(0, 0);
      
      // Also try after a brief delay
      setTimeout(() => {
        mainElement.scrollTop = 0;
        mainElement.scrollTo(0, 0);
      }, 0);
      
      // And with requestAnimationFrame
      requestAnimationFrame(() => {
        mainElement.scrollTop = 0;
        mainElement.scrollTo(0, 0);
      });
    }
    
    // Also try window scroll as backup
    window.scrollTo(0, 0);
  }, []);

  // Product detail content based on ID
  const getProductContent = () => {
    switch (productId) {
      case "mycare":
        return {
          title: "MyCare",
          subtitle: "Healthcare Management Platform",
          role: "Lead UX Designer",
          year: "2025",
          overview: "MyCare is a comprehensive healthcare management platform designed to streamline patient care coordination and medical record access. The project focused on creating an intuitive interface for both patients and healthcare providers.\n\nMyCare was designed to work with a proprietary device to be worn by patients at home or in hospital. Based on widely available and inexpensive technology, the device was essentially a combination fitness tracker, continuous glucose monitor, and pulse oximeter.",
          challenge: "In addition to being overbooked and understaffed, healthcare systems are often fragmented, with patient information scattered across multiple platforms. Particularly in older patients and those with cognitive decline, patients struggle to access their records, schedule appointments, and communicate with providers effectively.",
          solution: "I developed a unified platform that brings together medical records, appointment scheduling, and provider communication. Creating a line of communication between patients and medical professionals effectively reduces unnecessary traffic in clinics and emergency rooms by providing reminders for appointments, prescriptions, and physician advice.\n\nThe end product enabled healthcare providers to quickly access vital statistics and parse patient records, which saved valuable time during emergency consultations and triage. Patients had reduced barriers to booking medical appointments and renewing prescriptions, in addition to reminders for both. Patients could also access their own records, including physician advice and notes following consultations, thus reducing patient volume and unnecessary appointments in clinics and emergency rooms.",
          impact: [
            "Reduced appointment scheduling time by 60% in trials",
            "Decreased administrative workload by 18-30%",
            "Increased patient satisfaction scores by 45% from pre-introduction levels",
            "85% satisfaction from caretaker users"
          ],
          tags: ["Web Design", "Mobile Design", "User Research", "Accessibility", "Healthcare"],
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwfGVufDF8fHx8MTc2NjA3NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        };
      
      case "moongarden":
        return {
          title: "Moon Garden",
          subtitle: "Wellness & Growth App",
          role: "Product Designer",
          year: "2024",
          overview: "Moon Garden is a wellness application designed to help users complete challenging tasks, build healthy routines, and cultivate a positive outlook.\n\nDesigned for users with trauma, neurodivergence, and behavioural challenges like ADHD and Autism, Moon Garden provides visual examples of personal growth which is achieved by completing everyday tasks that otherwise seem impossible.\n\nThe design draws inspiration from natural cycles and lunar phases, showing users that difficult times are only phases that help us grow into something beautiful.",
          challenge: "Speaking from personal experience, many wellness and behavioural apps feel clinical or overwhelming. Users need a calming, intuitive experience that makes personal growth accessible without adding more stress to their lives with constant reminders, notifications, and the sense of pressure that follows.",
          solution: "I created a serene, nature-inspired interface with gentle animations and personalized growth journeys. Moon Garden allows the user to input the tasks and behaviours they want to work on and track their rates of completion without being imposing, urgent, or creating a win/loss binary. Rewards for completion allow the user to buy items to grow a garden, thereby turning their obstacles into part of a game which shows literal growth over time.\n\nThere is also a section with curated articles featuring \"good news\" about topics relevant to the user's interests. This feature is designed to help reduce \"doomscrolling\" prevalent in social media users with anxiety and depression.",
          impact: [
            "Users reported a 40% increase in productivity, 20% reduction in stress levels in the first four weeks",
            "Average goal completion of 82% amongst retained users",
            "Daily active user retention of 63%"
          ],
          tags: ["Mobile Design", "Reward Systems", "UX/UI", "Animation", "Wellness"],
          image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwYXBwfGVufDF8fHx8MTc2NjA1NTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        };
      
      case "hilareads":
        return {
          title: "Hilareads",
          subtitle: "Social Reading Platform",
          role: "UX/UI Designer",
          year: "2024",
          overview: "Hilareads is a digital reading tracker that brings together book lovers through social features and personalized reading recommendations.\n\nHilareads also serves as a social media branding nexus that combines the joy of reading with community engagement.",
          challenge: "Digital reading experiences often feel isolated. Readers want to connect with others, discover new books, and share their thoughts without the experience feeling forced or overwhelmed.\n\nThe client wanted to build a community of passionate readers, while generating insights into their own reading habits.",
          solution: "I designed an elegant reading interface with seamless social features. The user can highlight passages, share thoughts, and discover books through their community—all without disrupting the reading experience.",
          impact: [
            "Monthly active users grew by 250%",
            "Community engagement targets exceeded by 50%",
            "Overwhelming client satisfaction leading to repeat business (because she married me)"
          ],
          tags: ["Library Design", "Social Features", "Community Building", "E-Reading"],
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYXBwfGVufDF8fHx8MTc2NjA2MTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        };
      
      default:
        return null;
    }
  };

  const content = getProductContent();
  
  if (!content) return null;

  return (
    <div className="max-w-4xl">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm mb-4 rounded">
          CASE STUDY
        </div>
        <h2 className="text-4xl mb-2">{content.title}</h2>
        <p className="text-xl text-muted-foreground mb-4">{content.subtitle}</p>
        <p className="text-sm text-primary">{content.role} • {content.year}</p>
        <div className="h-1 w-24 bg-primary rounded-full mt-4" />
      </div>

      {/* Hero Image */}
      {productId === "mycare" ? (
        // MyCare specific hero with layered images
        <div className="relative aspect-video rounded-lg mb-12 border border-primary/20 bg-secondary overflow-hidden">
          {/* Background fuzzy dashboard */}
          <img 
            src={fuzzyDashboard} 
            alt="MyCare Dashboard Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Centered mobile dashboard overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img 
              src={mobileDashboard} 
              alt="MyCare Mobile Dashboard"
              className="h-full w-auto max-w-full object-contain"
              style={{ maxHeight: '90%' }}
            />
          </div>
        </div>
      ) : productId === "moongarden" ? (
        // Moon Garden specific hero with layered images
        <div className="relative aspect-video rounded-lg mb-12 border border-primary/20 bg-secondary overflow-hidden">
          {/* Background desktop image with blur */}
          <img 
            src={moonGardenDesktop} 
            alt="Moon Garden Desktop Background"
            className="absolute inset-0 w-full h-full object-cover blur-sm opacity-60"
          />
          {/* Centered mobile overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img 
              src={moonGardenMobile} 
              alt="Moon Garden Mobile"
              className="h-full w-auto max-w-full object-contain"
              style={{ maxHeight: '90%' }}
            />
          </div>
        </div>
      ) : productId === "hilareads" ? (
        // Hilareads specific hero with layered images
        <div className="relative aspect-video rounded-lg mb-12 border border-primary/20 bg-secondary overflow-hidden">
          {/* Background desktop image with blur */}
          <img 
            src={hilareadsDesktop} 
            alt="Hilareads Desktop Background"
            className="absolute inset-0 w-full h-full object-cover blur-sm opacity-60"
          />
          {/* Centered mobile overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img 
              src={hilareadsMobile} 
              alt="Hilareads Mobile"
              className="h-full w-auto max-w-full object-contain"
              style={{ maxHeight: '90%' }}
            />
          </div>
        </div>
      ) : (
        // Default hero image for other products
        <div className="aspect-video overflow-hidden bg-secondary rounded-lg mb-12 border border-primary/20">
          <ImageWithFallback
            src={content.image}
            alt={content.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="space-y-10">
        {/* Overview */}
        <div>
          <h3 className="text-xl mb-4 text-primary">Overview</h3>
          <p className="text-muted-foreground leading-relaxed">
            {content.overview}
          </p>
        </div>

        {/* Challenge */}
        <div>
          <h3 className="text-xl mb-4 text-primary">The Challenge</h3>
          <p className="text-muted-foreground leading-relaxed">
            {content.challenge}
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-xl mb-4 text-primary">The Solution</h3>
          <p className="text-muted-foreground leading-relaxed">
            {content.solution}
          </p>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-xl mb-4 text-primary">Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.impact.map((item, index) => (
              <div key={index} className="border border-primary/20 rounded-lg p-4 bg-card">
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-xl mb-4 text-primary">Skills & Methods</h3>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span key={tag} className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Live Prototype Section */}
        <LivePrototypeSection productId={productId} />
      </div>
    </div>
  );
}

function LivePrototypeSection({ productId }: { productId: string }) {
  const [activeView, setActiveView] = useState<"desktop" | "mobile">("desktop");
  
  // Moon Garden - mobile only
  if (productId === "moongarden") {
    return (
      <div className="border border-primary/20 rounded-lg p-6 lg:p-8 bg-card/50 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <Clapperboard className="w-6 h-6 text-primary" />
          <h3 className="text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Live Prototype
          </h3>
        </div>
        
        {/* Mobile Prototype */}
        <div className="relative bg-secondary rounded-lg overflow-hidden border border-primary/20">
          <div className="flex justify-center items-center p-8 bg-secondary" style={{ minHeight: "600px" }}>
            <div className="relative" style={{ width: "375px", height: "667px" }}>
              <iframe
                src="https://moongarden-henna.vercel.app"
                className="w-full h-full rounded-lg shadow-2xl"
                title="Moon Garden Mobile Prototype"
                style={{ border: "1px solid rgba(207, 163, 88, 0.3)" }}
              />
            </div>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4 italic">
          Interactive mobile prototype - Explore the Moon Garden experience
        </p>
      </div>
    );
  }
  
  // Hilareads - desktop and mobile tabs
  if (productId === "hilareads") {
    return (
      <div className="border border-primary/20 rounded-lg p-6 lg:p-8 bg-card/50 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <Clapperboard className="w-6 h-6 text-primary" />
          <h3 className="text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Live Prototype
          </h3>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveView("desktop")}
            className={`px-4 py-2 rounded-lg transition-all text-sm ${
              activeView === "desktop"
                ? "bg-primary text-primary-foreground golden-glow"
                : "bg-secondary text-foreground hover:bg-primary/10"
            }`}
          >
            Desktop View
          </button>
          <button
            onClick={() => setActiveView("mobile")}
            className={`px-4 py-2 rounded-lg transition-all text-sm ${
              activeView === "mobile"
                ? "bg-primary text-primary-foreground golden-glow"
                : "bg-secondary text-foreground hover:bg-primary/10"
            }`}
          >
            Mobile View
          </button>
        </div>
        
        {/* Iframe Container */}
        <div className="relative bg-secondary rounded-lg overflow-hidden border border-primary/20">
          {activeView === "desktop" ? (
            <div className="w-full overflow-hidden" style={{ height: "560px" }}>
              <iframe
                src="https://hilareads.com"
                className="origin-top-left"
                title="Hilareads Desktop Prototype"
                style={{ 
                  border: "none",
                  width: "1440px",
                  height: "900px",
                  transform: "scale(0.57)",
                  transformOrigin: "0 0"
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center p-8 bg-secondary" style={{ minHeight: "600px" }}>
              <div className="relative" style={{ width: "375px", height: "667px" }}>
                <iframe
                  src="https://hilareads.com"
                  className="w-full h-full rounded-lg shadow-2xl"
                  title="Hilareads Mobile Prototype"
                  style={{ border: "1px solid rgba(207, 163, 88, 0.3)" }}
                />
              </div>
            </div>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4 italic">
          Interactive prototype - Click to explore the Hilareads experience
        </p>
      </div>
    );
  }
  
  // MyCare - desktop and mobile tabs
  return (
    <div className="border border-primary/20 rounded-lg p-6 lg:p-8 bg-card/50 mt-12">
      <div className="flex items-center gap-3 mb-6">
        <Clapperboard className="w-6 h-6 text-primary" />
        <h3 className="text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
          Live Prototype
        </h3>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveView("desktop")}
          className={`px-4 py-2 rounded-lg transition-all text-sm ${
            activeView === "desktop"
              ? "bg-primary text-primary-foreground golden-glow"
              : "bg-secondary text-foreground hover:bg-primary/10"
          }`}
        >
          Desktop View
        </button>
        <button
          onClick={() => setActiveView("mobile")}
          className={`px-4 py-2 rounded-lg transition-all text-sm ${
            activeView === "mobile"
              ? "bg-primary text-primary-foreground golden-glow"
              : "bg-secondary text-foreground hover:bg-primary/10"
          }`}
        >
          Mobile View
        </button>
      </div>
      
      {/* Iframe Container */}
      <div className="relative bg-secondary rounded-lg overflow-hidden border border-primary/20">
        {activeView === "desktop" ? (
          <div className="w-full overflow-hidden" style={{ height: "560px" }}>
            <iframe
              src="https://mycare-theta.vercel.app"
              className="origin-top-left"
              title="MyCare Desktop Prototype"
              style={{ 
                border: "none",
                width: "1440px",
                height: "900px",
                transform: "scale(0.57)",
                transformOrigin: "0 0"
              }}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center p-8 bg-secondary" style={{ minHeight: "600px" }}>
            <div className="relative" style={{ width: "375px", height: "667px" }}>
              <iframe
                src="https://mycare-theta.vercel.app"
                className="w-full h-full rounded-lg shadow-2xl"
                title="MyCare Mobile Prototype"
                style={{ border: "1px solid rgba(207, 163, 88, 0.3)" }}
              />
            </div>
          </div>
        )}
      </div>
      
      <p className="text-xs text-muted-foreground text-center mt-4 italic">
        Interactive prototype - Click to explore the MyCare experience
      </p>
    </div>
  );
}

function ResearchSection() {
  const researchProjects = [
    {
      id: 1,
      title: "Trauma-Informed Clinical Examination System",
      year: "2018 - 2024",
      organization: "Dalhousie University, Dept. of Medicine",
      role: "Lead Product Designer (UX)",
      description: [
        "Redesigned how medical professionals conduct high-risk, trauma-sensitive physical examinations by developing a scalable, evidence-based training system used across clinical environments. This work transformed fragmented, inconsistent practices into a standardized, user-centered protocol that improves both patient outcomes and clinical efficiency.",
        "Led end-to-end system design from research to framework delivery. Conducted qualitative research across patients and clinicians, translating behavioral insights into scalable clinical protocols."
      ],
      problem: "Survivors of assault frequently experienced secondary trauma during medical examinations due to inconsistent clinician approaches, poor communication, and examination methods that prioritized procedure over patient experience. This resulted in increased patient distress, inefficient examinations, and lack of standardized protocols.",
      findings: [
        "Touch mechanics: Back-of-hand vs palm contact materially affected perceived safety",
        "Language systems: Terminology, tone, and naming conventions influenced trust and compliance",
        "Agency design: Introducing patient participation reduced anxiety and improved exam accuracy",
        "Clinical effectiveness was not limited by technical skill—but by interaction design at the human level"
      ],
      solution: "A scalable trauma-informed examination system that standardizes clinician behavior through evidence-based interaction models, embeds patient agency directly into clinical workflows, and aligns medical efficiency with human-centered care.",
      impact: [
        "↓ Examination time from ~6 minutes → ~2 minutes (~65% reduction)",
        "↓ Training time from 90 minutes → 60 minutes (~33% improvement)",
        "↑ Consistency and accuracy of clinical execution",
        "Increased patient comfort, trust, and compliance",
        "Adopted by hundreds of medical professionals across disciplines"
      ]
    },
    {
      id: 2,
      title: "Newcomer Workforce Integration Platform",
      year: "2022",
      organization: "Immigration Services Association of Nova Scotia",
      role: "Lead Product Designer (UX)",
      description: [
        "Designed a 0→1 digital platform to help newcomers to Canada navigate complex employment systems and enter the workforce faster. Led end-to-end product design across research, strategy, and delivery for a national initiative.",
        "Owned end-to-end design from discovery to delivery. Led research, synthesis, information architecture, and prototyping. Collaborated with policy stakeholders, employment experts, and engineers."
      ],
      problem: "Newcomers struggled with fragmented and confusing employment systems. Information was spread across multiple disconnected platforms, unclear next steps led to high drop-off rates, and there was a mismatch between user expectations and real hiring processes. This resulted in low program completion and delayed workforce integration.",
      findings: [
        "Users didn't need more information—they needed clear, guided pathways",
        "Consolidated fragmented systems into a step-based journey model",
        "Introduced progressive disclosure to reduce cognitive load",
        "Mapped key decision points across the user lifecycle"
      ],
      solution: "A guided digital platform that personalizes user journeys based on goals and background, breaks complex systems into clear, sequential steps, and integrates fragmented resources into a single experience.",
      impact: [
        "↑ Program completion rate by ~30%",
        "↓ User drop-off during onboarding",
        "Improved job-readiness outcomes for 500+ users",
        "Scaled across multiple regions in Canada"
      ]
    },
    {
      id: 3,
      title: "Mobile Trading Card Game (TCG) Platform",
      year: "2023",
      organization: "Tobenstein Technologies",
      role: "Lead Product Designer (UX / Product)",
      description: [
        "Designed a mobile-first digital trading card game platform focused on acquisition, engagement, and long-term retention. Led end-to-end product design, from core gameplay systems to monetization and release strategy.",
        "Owned 0→1 product design including game systems, UX, and engagement loops. Conducted competitive analysis across leading TCG platforms. Designed gameplay mechanics, progression systems, and user flows."
      ],
      problem: "The digital TCG market is highly competitive and saturated, with user expectations shaped by established ecosystems. Key challenges included high barrier to entry for new users, low retention due to complexity or lack of novelty, and difficulty balancing innovation with familiar gameplay patterns.",
      findings: [
        "Users expect predictable systems with controlled novelty—innovation succeeds only when layered on top of familiar mechanics",
        "Push factors (acquisition): familiarity, IP recognition, accessibility",
        "Pull factors (retention): progression, collection systems, social play",
        "Designed for session flexibility with matches under 5 minutes while maintaining emotional investment"
      ],
      solution: "A scalable TCG platform with a core gameplay loop (Collect → Customize → Battle → Reward → Progress) that minimizes onboarding friction, maximizes short-session engagement, and encourages repeat play through reward systems.",
      impact: [
        "Delivered full product design system, gameplay framework, and go-to-market strategy",
        "Defined retention model based on proven behavioral patterns",
        "Created a product designed for high replayability and long-term engagement",
        "Product was not launched due to funding constraints, but demonstrated strong product intuition around engagement and retention systems"
      ]
    },
    {
      id: 4,
      title: "Global eLearning Platform (TalkNow)",
      year: "2020",
      organization: "Tobenstein Technologies",
      role: "Lead UX Researcher & Product Designer",
      description: [
        "Led UX research and product design for a large-scale eLearning platform targeting a multi-country user base across East and Southeast Asia. Focused on building a scalable system that supports diverse user needs across age groups, roles, and cultural contexts.",
        "Led a team of 12 researchers across multiple regions. Defined user personas, behavioral models, and product requirements. Translated research into product design strategy and UX systems."
      ],
      problem: "Designing a unified platform for a highly diverse user base introduced major challenges: wide variation in age, goals, and learning styles; conflicting needs across instructors, learners, and subscribers; and high expectations for usability in an already mature product category. Failure to balance user needs would result in low adoption and poor engagement at scale.",
      findings: [
        "Developed personas across Japan, Thailand, China, and South Korea",
        "Mapped overlapping and conflicting priorities: Security vs accessibility, Engagement vs simplicity, Standardization vs localization",
        "Success depended on designing a system that balances competing needs without over-optimizing for any single group",
        "Adopted established UX patterns to reduce learning curve while focusing innovation on interaction quality and engagement"
      ],
      solution: "A multi-role eLearning platform that supports diverse user needs through role-based experiences, maintains usability through familiar interaction patterns, and scales across regions with minimal friction.",
      impact: [
        "Contributed to launch in a highly competitive market (~2.2B potential users across 17 countries)",
        "Established foundational UX systems and personas for product development",
        "Delivered scalable research framework for future iterations",
        "Key ethical learning: Encountered significant concerns around user privacy and data protection. Advocated for stronger privacy standards in a low-regulation environment. The company did not sustain long-term success. Key takeaway: Strong UX systems must be supported by ethical product decisions and sustainable business practices."
      ]
    }
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm mb-4 rounded">
          ACT II: THE INVESTIGATION
        </div>
        <h2 className="text-4xl mb-4">Research Projects</h2>
        <div className="h-1 w-24 bg-primary rounded-full" />
      </div>
      
      <p className="text-muted-foreground mb-12">
        Case studies demonstrating systems thinking, research-driven design, and measurable impact across healthcare, education, and consumer products.
      </p>

      <div className="space-y-10">
        {researchProjects.map((project, index) => (
          <div key={project.id} className="border-l-2 border-primary/30 pl-6 pb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl">{project.title}</h3>
                <p className="text-sm text-primary">{project.role}</p>
                <p className="text-xs text-muted-foreground">{project.organization} | {project.year}</p>
              </div>
            </div>

            <div className="text-muted-foreground mb-4 leading-relaxed space-y-3">
              {Array.isArray(project.description) ? (
                project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            {project.problem && (
              <div className="bg-secondary/50 border border-primary/10 rounded-lg p-4 mb-4">
                <h4 className="text-sm text-primary mb-2">Problem</h4>
                <p className="text-sm text-muted-foreground">{project.problem}</p>
              </div>
            )}

            <div className="bg-secondary/50 border border-primary/10 rounded-lg p-4 mb-4">
              <h4 className="text-sm text-primary mb-2">Key Findings</h4>
              <ul className="space-y-2">
                {project.findings.map((finding, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    • {finding}
                  </li>
                ))}
              </ul>
            </div>

            {project.solution && (
              <div className="bg-secondary/50 border border-primary/10 rounded-lg p-4 mb-4">
                <h4 className="text-sm text-primary mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </div>
            )}

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h4 className="text-sm text-primary mb-2">Impact</h4>
              <ul className="space-y-2">
                {project.impact.map((item, i) => (
                  <li key={i} className="text-sm text-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CVSection() {
  const [certificationsOpen, setCertificationsOpen] = useState(false);

  const experience = [
    {
      title: "Senior Product Designer (UX & Web)",
      company: "Soul Atlas",
      location: "Dublin, Ireland",
      period: "2025 - Present",
      description: [
        "Translate high-level creative direction into scalable, production-ready web and app experiences, ensuring alignment between brand vision and user needs",
        "Partner with cross-functional teams (creative, product, engineering) to deliver cohesive digital products from concept through launch",
        "Design intuitive user flows, wireframes, and high-fidelity interfaces that improve usability, engagement, and visual consistency",
        "Apply and evolve design systems and style guides to maintain quality and consistency across platforms",
        "Bridge the gap between concept and execution, reducing iteration cycles and accelerating time-to-delivery"
      ]
    },
    {
      title: "Senior Product Designer (UX)",
      company: "Threshold Training Associates",
      location: "Prague, CZ",
      period: "2023 - 2025",
      description: [
        "Led end-to-end design of scalable digital learning products across enterprise sectors (banking, energy), increasing user engagement by ~30%",
        "Transformed complex workflows into intuitive user journeys, reducing task completion time by ~25%",
        "Partnered with engineering and product in agile sprints to ship features faster, improving delivery velocity by ~20%",
        "Established reusable design patterns, improving consistency across products"
      ]
    },
    {
      title: "Product Designer (UX), Medical Education Platforms",
      company: "Dalhousie University, Dept. of Medicine",
      location: "Halifax, Canada",
      period: "2018 - 2024",
      description: [
        "Redesigned core education platforms used by 1,000+ medical professionals, improving usability scores by ~35%",
        "Led user research with clinicians, synthesizing insights into product decisions and roadmap priorities",
        "Re-architected information systems to support complex learning workflows, increasing completion rates",
        "Influenced stakeholders to adopt user-centered design, accelerating digital transformation"
      ]
    },
    {
      title: "Lead Product Designer (UX), Newcomer Integration Platform",
      company: "Immigration Services Association of Nova Scotia",
      location: "Canada",
      period: "2022 - 2023",
      description: [
        "Led UX for a national digital platform supporting workforce integration across Canada",
        "Designed end-to-end user journeys that improved job-readiness outcomes for 500+ users",
        "Translated complex government and employment systems into accessible product experiences",
        "Collaborated with cross-functional teams to deliver scalable, user-centered solutions"
      ]
    },
    {
      title: "Lead UX Designer (MedTech / EdTech Products)",
      company: "Tobenstein Technologies",
      location: "East Asia / Canada",
      period: "2018 - 2022",
      description: [
        "Directed UX for multiple digital products across healthcare and education markets",
        "Reduced usability friction by ~40% through iterative prototyping and testing",
        "Built scalable design frameworks to support multi-product ecosystems",
        "Delivered data-informed design improvements that increased user satisfaction and retention"
      ]
    },
    {
      title: "UX Designer",
      company: "KNOX Academy",
      location: "South Korea",
      period: "2017 - 2018",
      description: [
        "Designed responsive product experiences for eLearning platform used by 1,000+ users",
        "Improved navigation and information architecture, increasing user engagement",
        "Conducted usability testing to inform product iterations"
      ]
    },
    {
      title: "Operations Lead, Emergency Response & Communications",
      company: "Paladin Security & Emergency Response",
      location: "Canada",
      period: "2010 - 2014",
      description: [
        "Led real-time emergency response operations across a major metropolitan hospital network, coordinating multi-team workflows in high-pressure, time-critical environments",
        "Managed incident communications and decision-making systems, improving response efficiency and reducing escalation time across shifts",
        "Applied human behavior and crisis intervention principles to de-escalate complex situations, strengthening user-centered thinking in high-stress contexts",
        "Designed and refined operational protocols, increasing consistency and effectiveness of response procedures",
        "Supervised and trained cross-functional teams, ensuring alignment, clarity, and execution under rapidly changing conditions"
      ]
    }
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm mb-4 rounded">
          THE CREDITS
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl">Curriculum Vitae</h2>
          <button
            onClick={() => {
              // Download CV PDF from /public folder
              const link = document.createElement('a');
              link.href = '/rob-perry-cv.pdf';
              link.download = 'Rob-Perry-CV.pdf';
              link.click();
            }}
            className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-lg bg-card hover:bg-primary/10 hover:border-primary transition-all text-sm"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>Download PDF</span>
          </button>
        </div>
        <div className="h-1 w-24 bg-primary rounded-full" />
      </div>
      
      {/* Profile */}
      <div className="mb-12 border border-primary/20 rounded-lg p-6 bg-card/50">
        <h3 className="text-2xl mb-3 text-primary">Rob Perry</h3>
        <p className="text-sm text-muted-foreground mb-4">Senior Product Designer (UX & Web)</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Product designer with 9+ years of experience translating complex systems into clear, scalable digital experiences across healthcare, education, and consumer products.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          Track record of leading end-to-end design from research through delivery, shipping products that improve usability, engagement, and measurable outcomes. Experience spans trauma-informed clinical systems, workforce integration platforms, and global eLearning products.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          Former emergency response operations lead with expertise in high-pressure decision-making, systems design, and crisis intervention—background that continues to shape how I approach product design under real-world constraints.
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Experience */}
        <div>
          <h3 className="text-xl mb-6 text-primary">Work Experience</h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                <div className="mb-2">
                  <h4 className="text-lg">{job.title}</h4>
                  <p className="text-primary text-sm">{job.company}</p>
                  <p className="text-muted-foreground text-xs">{job.location} • {job.period}</p>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl mb-6 text-primary">Education</h3>
          <div className="space-y-4">
            {/* Master's Degree */}
            <div className="border border-primary/20 rounded-lg p-4 bg-card">
              <h4>Master of Arts</h4>
              <p className="text-primary text-sm">Saint Mary's University | Halifax, Canada</p>
              <p className="text-muted-foreground text-xs">2022</p>
            </div>
            
            {/* Bachelor's Degree */}
            <div className="border border-primary/20 rounded-lg p-4 bg-card">
              <h4>Bachelor of Arts</h4>
              <p className="text-primary text-sm">Saint Mary's University | Halifax, Canada</p>
              <p className="text-muted-foreground text-xs">2016</p>
            </div>
            
            {/* Certifications Dropdown */}
            <div className="border border-primary/20 rounded-lg bg-card overflow-hidden">
              <button
                onClick={() => setCertificationsOpen(!certificationsOpen)}
                className="w-full p-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <h4>Certifications</h4>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform ${
                    certificationsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {certificationsOpen && (
                <div className="px-4 pb-4 border-t border-primary/10">
                  {/* Main Certifications */}
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">IBM Full-Stack Software Developer Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2025</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">IBM Front-End Developer Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2025</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">IBM Back-End Development Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2025</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">IBM DevOps and Software Engineering Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2025</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">IBM Full-stack JavaScript Developer Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2025</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">IBM Back-end JavaScript Developer Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2025</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">Google UX Design Professional Certificate</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2024</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">Certificate to Teach English as a Foreign Language</p>
                      <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">2016</span>
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-1">The Language House, Prague</p>
                  </div>

                  {/* Courses & Specialisation Certificates */}
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <h5 className="text-sm text-primary mb-3">Courses & Specialisation Certificates</h5>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        • University of Colorado Boulder; Effective Communication: Writing, Design, and Presentation
                      </p>
                      <p className="text-xs text-muted-foreground">
                        • IBM JavaScript programming with react, node, & mongo DB professional certificate
                      </p>
                      <p className="text-xs text-muted-foreground">
                        • IBM Applied software engineering fundamentals professional certificate
                      </p>
                      <p className="text-xs text-muted-foreground">
                        • IBM Cloud application development fundamentals professional certificate
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl mb-6 text-primary">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="border border-primary/20 rounded-lg p-4 bg-card">
              <h4 className="text-sm text-primary mb-3">Design</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Figma</li>
                <li>• Webflow</li>
                <li>• Framer</li>
                <li>• Wordpress</li>
                <li>• SquareSpace</li>
                <li>• Canva</li>
                <li>• Notion</li>
                <li>• Blender</li>
                <li>• Various generative AI tools (sure, I have qualms with them. I also have qualms with air pollution, but I can't act like it doesn't exist).</li>
              </ul>
            </div>
            <div className="border border-primary/20 rounded-lg p-4 bg-card">
              <h4 className="text-sm text-primary mb-3">Programming</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• HTML/CSS</li>
                <li>• JavaScript</li>
                <li>• React</li>
                <li>• Python</li>
                <li>• Django</li>
                <li>• Agile Development</li>
                <li>• CI/CD</li>
                <li className="italic">**Skill level varies</li>
              </ul>
            </div>
            <div className="border border-primary/20 rounded-lg p-4 bg-card">
              <h4 className="text-sm text-primary mb-3">Languages</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• English (C2/Mother Tongue)</li>
                <li>• French (B1)</li>
                <li>• Dutch (B1)</li>
                <li>• German/Yiddish (A1)</li>
                <li>• Nordic Languages (Swedish, Norwegian, Danish; Some literary skills).</li>
              </ul>
            </div>
            <div className="border border-primary/20 rounded-lg p-4 bg-card">
              <h4 className="text-sm text-primary mb-3">Life Skills</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Research</li>
                <li>• Conflict Negotiation</li>
                <li>• Crisis Intervention Training</li>
                <li>• Active Shooter Training</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl mb-6 text-primary">Languages</h3>
          <div className="flex flex-wrap gap-3">
            <div className="border border-primary/20 rounded-lg px-4 py-2 bg-card">
              <p className="text-sm">English <span className="text-xs text-muted-foreground">(C2, native)</span></p>
            </div>
            <div className="border border-primary/20 rounded-lg px-4 py-2 bg-card">
              <p className="text-sm">Dutch <span className="text-xs text-muted-foreground">(B1)</span></p>
            </div>
            <div className="border border-primary/20 rounded-lg px-4 py-2 bg-card">
              <p className="text-sm">French <span className="text-xs text-muted-foreground">(B1)</span></p>
            </div>
            <div className="border border-primary/20 rounded-lg px-4 py-2 bg-card">
              <p className="text-sm">German/Yiddish <span className="text-xs text-muted-foreground">(A1)</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm mb-4 rounded">
          EPILOGUE
        </div>
        <h2 className="text-4xl mb-4">Contact</h2>
        <div className="h-1 w-24 bg-primary rounded-full" />
      </div>

      <p className="text-muted-foreground mb-8">
        Ready to collaborate on your next project? Drop me a message and let's create something remarkable together.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information - Film Frame */}
        <div className="relative border-2 border-primary/30 rounded-sm p-6 bg-card/50">
          {/* Top frame line */}
          <div className="absolute top-0 left-3 right-3 h-6 bg-primary/5 border-b border-primary/20 flex items-center justify-center">
            <div className="text-xs text-primary/50 tracking-widest" style={{ fontFamily: 'monospace' }}>
              [FRAME 01]
            </div>
          </div>

          {/* Bottom frame line */}
          <div className="absolute bottom-0 left-3 right-3 h-6 bg-primary/5 border-t border-primary/20" />

          {/* Film sprocket holes - left side */}
          <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col justify-around py-4 bg-primary/5 border-r border-primary/20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary/20 rounded-sm mx-auto" />
            ))}
          </div>

          {/* Film sprocket holes - right side */}
          <div className="absolute right-0 top-0 bottom-0 w-3 flex flex-col justify-around py-4 bg-primary/5 border-l border-primary/20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary/20 rounded-sm mx-auto" />
            ))}
          </div>

          <div className="px-4 pt-6">
            <h3 className="text-xl mb-6 text-primary">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a href="mailto:Robperryinc@protonmail.com" className="text-sm hover:text-primary transition-colors">
                    Robperryinc@protonmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+420734886938" className="text-sm hover:text-primary transition-colors">
                    (420) 734 886 938
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="text-sm">Prague, Czech Republic</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Linkedin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">LinkedIn</p>
                  <a href="https://linkedin.com/in/robperryinc" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    linkedin.com/in/robperryinc
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 mb-4 border-t border-primary/20">
              <p className="text-xs text-muted-foreground italic">
                "I think this is the beginning of a beautiful friendship."
              </p>
              <p className="text-xs text-primary mt-1">— Rick Blaine, Casablanca (1942)</p>
            </div>
          </div>
        </div>

        {/* Contact Form - Film Frame */}
        <div className="relative border-2 border-primary/30 rounded-sm p-6 bg-card/50">
          {/* Top frame line */}
          <div className="absolute top-0 left-3 right-3 h-6 bg-primary/5 border-b border-primary/20 flex items-center justify-center">
            <div className="text-xs text-primary/50 tracking-widest" style={{ fontFamily: 'monospace' }}>
              [FRAME 02]
            </div>
          </div>

          {/* Bottom frame line */}
          <div className="absolute bottom-0 left-3 right-3 h-6 bg-primary/5 border-t border-primary/20" />

          {/* Film sprocket holes - left side */}
          <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col justify-around py-4 bg-primary/5 border-r border-primary/20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary/20 rounded-sm mx-auto" />
            ))}
          </div>

          {/* Film sprocket holes - right side */}
          <div className="absolute right-0 top-0 bottom-0 w-3 flex flex-col justify-around py-4 bg-primary/5 border-l border-primary/20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary/20 rounded-sm mx-auto" />
            ))}
          </div>

          <div className="px-4 pt-6">
            <h3 className="text-xl mb-6 text-primary">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}