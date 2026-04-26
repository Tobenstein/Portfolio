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
                <p className="text-xs lg:text-sm text-foreground uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                  UX Director • Learning & Development
                </p>
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
        <p className="text-lg leading-relaxed">
          Welcome to my portfolio. I'm a world-travelled UX designer who believes that every great product tells a story— much like a well-crafted film. Each project is a journey with its own narrative arc, characters, and resolution.
        </p>
        
        <p className="leading-relaxed text-muted-foreground">
          With a background as a first responder in the largest medical complex in Eastern Canada and a wealth of experience in development & design, I approach each challenge with the mindset of a director: understanding the vision, collaborating with talented teams, and carefully crafting experiences that resonate with audiences. My work spans from medtech and trauma workshops to mobile games, always with a focus on the human story at the center.
        </p>

        <p className="text-lg leading-relaxed">
          Much like classics of world cinema, my portfolio emphasises substance over style, quality of content over flash and flair, and depth of meaning over bells and whistles. I could show you fancy buttons and lots of eye candy, but I have chosen instead to use this as a platform to discuss the skills and experience that will increase the value of your users' experience. My portfolio is designed for you to quickly and easily parse my experience in research projects and experiment with interactive prototypes.
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
      title: "Critical Examinations for Trauma Survivors",
      year: "2018 - 2024",
      organization: "Dalhousie University, Dept. of Medicine",
      description: [
        "Developed medical training programs for doctors, nurses, G.P.s, and other first responders. Workshops centred on patient-first protocol for delivering 'S.A. kits'; physical exams for survivors of assault.",
        "Research was conducted by soliciting patient feedback via confidential channels, including community outreach, as well as deep research in medical literature. We identified common pain points, focusing on improving negative patient experience which could exacerbate trauma.",
        "Other workshops include cardiovascular, bladder, and DT exams, simulated patient scenarios for pharmacy, nursing, and social assistance, and a myriad of others. These were rolling projects that were reassessed every six months so to stay current."
      ],
      findings: [
        "Variations of physical contact make huge differences in patients' feelings of safety. Eg. Neutral touch with the back of the hand vs palm creates a sense of security, mentally and physically prepares patient for exam.",
        "Small changes in verbiage change patients' perception of exam and administrator. Ex.: Calling a person by their preferred name/pronouns creates a comforting environment; 'Table' or 'Plinth' vs 'Bed', proper anatomical terminology vs slang terms – these create a divide between professional and personal environments; First-name basis vs formal address (Dr., Mr., Ms.) removes communication barriers. Response to this last finding were mixed.",
        "Patient participation reduces anxiety and improves efficacy of exam. Giving patients tasks (holding gown/blanket, moving structures) changes experience from having an exam done to them to participating in an exam."
      ],
      impact: [
        "Reception to our workshops was overwhelmingly positive. Hundreds of medical professionals were subsequently able to deliver critical physical exams to survivors of assault with confidence, competence, and efficiency.",
        "My contributions aided in reducing the workshop time from 90 minutes to >60, while overall exam time reduced from +/- 6 minutes to >2 minutes while improving efficacy. For patients, this resulted in greater patient comfort and satisfaction, and reduced physical stress. For medical professionals, this resulted in the ability to get findings faster, more efficiently, and with a much smaller margin for error."
      ]
    },
    {
      id: 2,
      title: "Modernising Curricula for Migrants & Newcomers",
      year: "2022",
      organization: "Immigration Services Association of Nova Scotia",
      description: [
        "Developed pan-cultural educational programmes for migrants which focused on critical life skills. These included theme-based curricula (eg. employment, banking, education) so newcomers could adapt and acclimate to life in Canada.",
        "I developed end-user eLearning software, learning materials, and acted as a native informant, having migrated several times myself."
      ],
      findings: [
        "Our users had >15 minutes per day to use our products on average.",
        "Adult learning needs to focus on practicality, usefulness, and effective communication, ie. get to the point and get to it quick. Migrants aren't interested in complex grammar lessons, linguistic theory, or discussing hobbies as much as being able to find a job, pay their bills, and navigate a grocery store.",
        "Youth learning needs to focus on fun and inclusion while providing life skills and facilitating integration.",
        "Developing materials and programs that are 'culture-neutral' and help integrate into a new culture requires a lot more work than expected. I had to be hyper-vigilant about verbiage, phrasing, and grammar that could be perceived as socially/culturally biased or excessively complex (despite being common). I also audited programs for images that could be shocking or problematic to newcomers, even if they are rather ordinary and mundane to Europeans and Canadians."
      ],
      impact: [
        "Reception to our programmes were generally positive. We faced an uphill challenge as our users were typically refugees from Syria and Ukraine, and we were literally teaching them how to survive in a foreign country.",
        "After six months we had a reduction in enrolment. This is typically a bad sign (reduced users = dissatisfaction), but in our case it was a positive. Our program worked so well that clients became more independent and integrated into the community, and were less reliant on immigration services and programs. It's not often that a lower user rate equals success."
      ]
    },
    {
      id: 3,
      title: "Championship Wrestling Federation Mobile Trading Card Game",
      year: "2023",
      organization: "Tobenstein Technologies",
      description: [
        "I leveraged my years of experience as a professional wrestler to develop a TCG in the spirit of Pokemon Go, MTA Arena, and WWF Raw Deal. I designed the game from the bottom up, including game mechanics, card designs, long-term in-game story, and marketing strategy.",
        "Most findings came from a competitive audit of similar games. I was looking for the push factors that motivate new users to try a mobile game, and the pull factors that drive retention/repeat use."
      ],
      findings: [
        "Users have expectations of consistency across digital TCGs. They expect to collect, trade, battle, and customise cards. They expect new released monthly, bi-monthly, or quarterly at the very latest.",
        "Unique card design and battle systems are desired, but extreme deviations from the norm results in disengagement.",
        "Users want flexibility in play times. Matches should not be time consuming (eg. <5 minutes), but not so short that they can't sink their teeth (emotionally invest) in a game."
      ],
      impact: [
        "I was able to deliver a game design package, business plan (incl. Release strategy), and methods of marketing to target demographics. In the game design package, I illustrated how to develop a game that would be easy to drop into, easy to understand, drive customer retention, and encourage social interaction with other users while remaining faithful to the source material.",
        "Hardcore wrestling fans are, as the term implies, hardcore. They want an experience that accurately and authentically represents the professional wrestling ecosystem. I'm very proud that I was able to develop a product that stayed true to the essence of my lifelong obsession, one that offered an air of nostalgia while being fresh and modern.",
        "In the end the client's funding was pulled, and the game subsequently died in production. It was at this point that I reached for my trusty steel chair..."
      ]
    },
    {
      id: 4,
      title: "TalkNow International eLearning Platform",
      year: "2020",
      organization: "Tobenstein Technologies",
      description: [
        "I led a team of 12 in conducting research for proprietary eLearning software. Our client wanted to take advantage of a boom in online education at the height of COVID.",
        "The goal was to create a product that would be accessible to young learners in Eastern Asia, while still retaining usability for adults."
      ],
      findings: [
        "Developed user personas for users in Japan, Thailand, China, and South Korea. Users were different ages with different learning styles, skillsets, goals, and career trajectories.",
        "Defined target users as Instructors, Learners, and Subscribers. Each has different concerns, drivers, and pain points using our product. Subscribers & Instructors cared most about security. Instructors & Learners cared most about interactivity and participation. Learners & Subscribers wanted high learner satisfaction. Unsurprisingly, all three groups were concerned with interaction, engagement, and fun.",
        "The UI design for the platform wasn't that difficult. By that point, eLearning software had plateaued in aesthetics and design. People had expectations of how eLearning software worked and functioned. By the standards of the day, there was just a best way to do this product."
      ],
      impact: [
        "Proprietary software was developed and launched to a hyper-competitive market of over 2.2 billion people across 17 countries. Yay.",
        "As far research projects go, this was both a great foundation and fantastic exercise in how to develop user personas, but an absolutely miserable work experience. I was working with a team based in a country where cybersecurity and digital privacy are essentially non-existent. We had a lot of conflicts about user privacy. The company tanked shortly after launch, and I all but divorced myself from this project. I leave it here to remind myself of the importance of learning from my failures, and to stick to my guns when it comes to morality and ethics."
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
        Deep dives into understanding users, their needs, and the context of their experiences.
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
                <p className="text-sm text-primary">{project.organization} | {project.year}</p>
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
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h4 className="text-sm text-primary mb-1">Impact</h4>
              <div className="text-sm text-foreground leading-relaxed space-y-2">
                {Array.isArray(project.impact) ? (
                  project.impact.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                ) : (
                  <p>{project.impact}</p>
                )}
              </div>
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
      title: "Senior UX Designer, Learning & Education",
      company: "Threshold Training Association",
      location: "Prague, CZ",
      period: "2023 - 2025",
      description: "Developed client-centred training programs for skills-based development in business, energy, banking, and more. Worked with stakeholders to plan, develop, and conduct research projects (typically UX, but also experimental learning methods)."
    },
    {
      title: "Education & Learning Designer, S.E.T.A",
      company: "Dalhousie University, Dept. of Medicine",
      location: "Halifax, Canada",
      period: "2018 - 2024",
      description: "Developed and delivered trauma workshops for nurses, general practitioners, medical students. Engaged with stakeholders & synthesised research data to update/improve deliverables. Provided consultations for modernising curricula and UX."
    },
    {
      title: "Lead UX, Education & Learning Designer (Medtech)",
      company: "Tobenstein Technologies",
      location: "East Asia / Canada",
      period: "2018 - 2024",
      description: "Developed medical learning & development software and learning strategies for 80+ international clients. Developed proprietary UI for L&D programs. Synthesised research and streamlined delivery based on stakeholder feedback."
    },
    {
      title: "Lead UX & Learning Designer, International Education",
      company: "Immigration Services Association of Nova Scotia",
      location: "Canada",
      period: "2022 - 2023",
      description: "Designed and developed eLearning programs/software designed to help integrate newcomers into the Canadian job market. Synthesised research data to improve and streamline content for digital delivery via proprietary UX/I."
    },
    {
      title: "Junior UX Designer, Education & Learning",
      company: "KNOX Academy",
      location: "South Korea",
      period: "2017 - 2018",
      description: "Designed proprietary eLearning software for ESL students. Developed and conducted user research projects for eLearning apps."
    },
    {
      title: "First Responder & Team Supervisor",
      company: "Paladin Security",
      location: "Halifax, Canada",
      period: "2010 - 2014",
      description: "Led a team of 5 in coordinated emergency response for the largest medical facility in Eastern Canada. Developed response strategy for disasters, attacks, emergencies, and crises. Crisis & non-crisis intervention, counter-terrorism. Active shooter training. If you've made it this far, you can probably surmise why I switched to design."
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
        <p className="text-sm text-muted-foreground mb-4">Learning & Development, UX Designer</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I have nine years of experience in UX design and Learning & Education development in Canada, South Korea, the EU, and East Asia. I excel at taking complex information sets and simplifying them into palatable, bite-sized pieces.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          I enjoy being part of the entire development lifecycle, from initial research through design & development, and CI/CD.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          My former career was as a first responder in major metropolitan hospitals: I have crisis and non-crisis intervention training, so I excel under pressure.
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.description}
                </p>
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