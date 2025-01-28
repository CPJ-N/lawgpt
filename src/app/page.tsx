"use client"
import { useRouter } from 'next/navigation';
import LogoCarousel from '@/components/LogoCarousel';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "General Counsel, Tech Corp",
    text: "LawGPT has revolutionized how we handle legal documentation. It's incredibly efficient and accurate.",
    company: "TechCorp Industries"
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Partner",
    text: "As a legal professional with 20+ years of experience, I'm impressed by the precision and reliability.",
    company: "Rodriguez & Partners"
  },
  {
    name: "Emily Thompson",
    role: "Legal Operations Director",
    text: "The platform has streamlined our legal operations significantly. Highly recommended for in-house teams.",
    company: "Global Enterprises Ltd"
  }
];

const products = [
  {
    title: "Legal Document Analysis",
    description: "AI-powered contract review and analysis with risk assessment capabilities.",
    icon: "📄",
    features: ["Contract Review", "Risk Assessment", "Clause Library"]
  },
  {
    title: "Case Management",
    description: "Streamline your legal workflow with our comprehensive case management system.",
    icon: "⚖️",
    features: ["Case Tracking", "Document Management", "Timeline View"]
  },
  {
    title: "Compliance Automation",
    description: "Stay compliant with automated regulatory monitoring and updates.",
    icon: "✓",
    features: ["Regulatory Updates", "Compliance Checks", "Audit Trails"]
  },
  {
    title: "Legal Research Assistant",
    description: "Advanced legal research tools powered by AI and machine learning.",
    icon: "🔍",
    features: ["Case Law Search", "Legal Analytics", "Citation Tools"]
  }
];

const caseStudies = [
  {
    title: "Global Tech Company Compliance",
    challenge: "Managing international data privacy regulations across 20+ jurisdictions",
    solution: "Implemented AI-powered compliance monitoring system",
    results: ["95% reduction in compliance review time", "Zero privacy violations in 12 months", "Cost savings of $2M annually"],
    industry: "Technology",
    image: "🌐" // You can replace with actual image path
  },
  {
    title: "Multi-State Legal Documentation",
    challenge: "Processing 10,000+ legal documents monthly across different state laws",
    solution: "Automated document analysis and classification system",
    results: ["80% faster document processing", "99.9% accuracy rate", "Enhanced regulatory compliance"],
    industry: "Legal Services",
    image: "📋"
  },
  {
    title: "Corporate Legal Risk Management",
    challenge: "Streamlining risk assessment for Fortune 500 company",
    solution: "Integrated risk analytics platform with predictive insights",
    results: ["60% reduction in legal risks", "Real-time risk monitoring", "$3M savings in potential litigation"],
    industry: "Finance",
    image: "⚖️"
  }
];

const integrations = [
  {
    name: "Microsoft Office 365",
    description: "Seamless integration with Word, Outlook, and SharePoint",
    icon: "📑",
    features: ["Document Sync", "Email Integration", "Calendar Management"]
  },
  {
    name: "Cloud Storage",
    description: "Connect with Dropbox, Google Drive, and OneDrive",
    icon: "☁️",
    features: ["Automatic Backup", "Version Control", "Secure Access"]
  },
  {
    name: "Practice Management",
    description: "Works with Clio, PracticePanther, and other PM tools",
    icon: "⚙️",
    features: ["Case Sync", "Time Tracking", "Billing Integration"]
  },
  {
    name: "E-Signature",
    description: "DocuSign and Adobe Sign integration for quick approval flows",
    icon: "✍️",
    features: ["Automated Workflows", "Signature Tracking", "Compliance"]
  }
];

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/chatbot');
  };

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/240_F_485397626_ydPEYshMKRIyY7HIH2jUCLu8nkC7X2KH.jpg"
          alt="Law Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-darkblue/80 to-brand-darkblue/90">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-end h-full max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-right">
            <h1 className="text-6xl md:text-7xl text-brand-white font-bold mb-6 max-w-2xl text-right leading-tight tracking-tight">
              AI-Powered <span className="text-brand-skyblue">Legal</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-brand-white/90 mb-10 max-w-xl text-right leading-relaxed">
              Transforming legal practice with cutting-edge AI technology and expert guidance.
            </p>
            <div className="flex gap-4 justify-end">
              <button 
                onClick={handleButtonClick}
                className="group relative px-8 py-4 rounded-full text-lg font-medium overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 
                  bg-gradient-to-r from-brand-skyblue via-brand-mediumblue to-brand-skyblue 
                  group-hover:bg-gradient-to-l"></span>
                <span className="relative text-white flex items-center">
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => router.push('/demo')}
                className="px-8 py-4 rounded-full text-lg font-medium border-2 border-white 
                  text-white hover:bg-white hover:text-brand-darkblue transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-brand-white to-brand-skyblue/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-brand-skyblue text-sm font-semibold tracking-wider uppercase">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-darkblue mt-4 mb-6">
              Comprehensive Legal Tech Solutions
            </h2>
            <div className="w-24 h-1 bg-brand-skyblue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                  transition-all duration-300 border border-brand-skyblue/10 
                  hover:border-brand-skyblue/30 hover:-translate-y-1"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-semibold text-brand-darkblue mb-4">
                  {product.title}
                </h3>
                <p className="text-brand-blue/70 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-brand-mediumblue/80 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-brand-skyblue mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-brand-skyblue/5 to-brand-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-darkblue text-center mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-brand-blue/80 text-center mb-12 max-w-3xl mx-auto">
            Solving real world problems
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{caseStudy.image}</div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-brand-blue/70 mb-4 text-sm">
                  <strong>Challenge:</strong> {caseStudy.challenge}
                </p>
                <p className="text-brand-blue/70 mb-4 text-sm">
                  <strong>Solution:</strong> {caseStudy.solution}
                </p>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="text-sm text-brand-mediumblue/80 flex items-center">
                      <span className="mr-2 text-brand-skyblue">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
                <p className="text-brand-blue/70 mt-4 text-sm">
                  <strong>Industry:</strong> {caseStudy.industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <div className="relative py-16 bg-gradient-to-r from-brand-darkblue via-brand-blue to-brand-skyblue">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-brand-white">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">2000+</h3>
              <p className="text-brand-white/80">Cases Handled</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-brand-white/80">Success Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">250+</h3>
              <p className="text-brand-white/80">Expert Attorneys</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-brand-white to-brand-skyblue/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-darkblue text-center mb-4">
            Our Customers
          </h2>
          <p className="text-xl text-brand-blue/80 text-center mb-12 max-w-3xl mx-auto">
            Trusted by forward-thinking businesses around the world.
          </p>
          
          <LogoCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-darkblue text-center mb-4">
            Recommended by Industry Pioneers
          </h2>
          <p className="text-xl text-brand-blue/80 text-center mb-12">
            Trusted by leading legal professionals and organizations worldwide
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-brand-skyblue/5 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-brand-skyblue/10 font-serif">
                  "
                </div>
                <blockquote className="text-brand-darkblue/80 mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t border-brand-skyblue/20 pt-4">
                  <p className="font-semibold text-brand-darkblue">{testimonial.name}</p>
                  <p className="text-sm text-brand-blue">{testimonial.role}</p>
                  <p className="text-sm text-brand-mediumblue/70">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-brand-skyblue/5 to-brand-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-darkblue text-center mb-4">
            Powerful Integrations
          </h2>
          <p className="text-xl text-brand-blue/80 text-center mb-12 max-w-3xl mx-auto">
            Integrates with your existing tech stack to free your team of time-consuming tasks and data transfer errors.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-skyblue/10 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-darkblue mb-2">
                  {integration.name}
                </h3>
                <p className="text-brand-blue/70 mb-4 text-sm">
                  {integration.description}
                </p>
                <ul className="space-y-2">
                  {integration.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-brand-mediumblue/80 flex items-center">
                      <span className="mr-2 text-brand-skyblue">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-brand-darkblue to-brand-mediumblue relative overflow-hidden rounded-2xl">
          <div className="px-8 py-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-white max-w-2xl leading-tight">
                  Ready to Transform Your Legal Practice?
                </h2>
                <p className="text-xl text-brand-white/80 mt-4">
                  Join thousands of satisfied legal professionals worldwide.
                </p>
              </div>
              <div className="flex-shrink-0 animate-fade-in-right">
                <button 
                  onClick={() => router.push('/demo')}
                  className="group relative px-8 py-4 rounded-full text-lg font-medium overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 
                    bg-white group-hover:bg-brand-skyblue"></span>
                  <span className="relative text-brand-darkblue group-hover:text-white flex items-center">
                    Schedule a Demo
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>
      </div>
    </div>
  )
}
