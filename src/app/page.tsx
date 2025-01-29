"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import LogoCarousel from '@/components/LogoCarousel';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

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

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
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
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleButtonClick = () => {
    router.push('/chatbot');
  };

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Hero Section - Enhanced contrast */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background layers with better contrast */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-darkblue to-brand-darkblue">
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 mix-blend-multiply opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-radial from-brand-skyblue/20 via-transparent to-transparent opacity-40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-skyblue/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-mediumblue/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-skyblue/5 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <motion.div style={{ opacity }} className="relative z-10 flex flex-col justify-center items-end h-screen max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 md:text-right text-center md:items-end items-center flex flex-col max-w-3xl"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl text-white font-bold leading-tight tracking-tight drop-shadow-2xl"
              >
                AI-Powered{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-skyblue to-white">Legal</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-brand-skyblue/30 -rotate-2 transform scale-110"></span>
                </span>{" "}
                Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-light drop-shadow-lg"
              >
                Transforming legal practice with cutting-edge AI technology and expert guidance.
              </motion.p>
            </div>

            {/* Enhanced buttons with better hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center md:justify-end"
            >
              <button 
                onClick={handleButtonClick}
                className="group relative px-8 py-4 rounded-full text-lg font-medium overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-brand-skyblue/30"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform 
                  bg-gradient-to-r from-brand-skyblue via-brand-mediumblue to-brand-skyblue 
                  group-hover:bg-gradient-to-l bg-size-200 bg-pos-0 group-hover:bg-pos-100"></span>
                <span className="relative text-white flex items-center">
                  Start Free Trial
                  <motion.svg 
                    whileHover={{ x: 5 }}
                    className="w-5 h-5 ml-2"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </button>
              <button 
                onClick={() => router.push('/demo')}
                className="group px-8 py-4 rounded-full text-lg font-medium border-2 border-white/30 
                  text-white hover:bg-white/10 transform hover:scale-105 
                  transition-all duration-300 backdrop-blur-sm hover:border-white
                  hover:shadow-lg hover:shadow-white/20"
              >
                <span className="flex items-center">
                  Watch Demo
                  <span className="ml-2 group-hover:rotate-45 transition-transform duration-300">▶</span>
                </span>
              </button>
            </motion.div>

            {/* Enhanced Stats bar with better contrast */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex gap-12 py-6 px-10 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20
                hover:bg-white/15 transition-colors duration-300 shadow-xl shadow-black/10"
            >
              {[
                { number: "2000+", label: "Cases Handled" },
                { number: "98%", label: "Success Rate" },
                { number: "250+", label: "Expert Attorneys" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
                  className="text-center relative group"
                >
                  <div className="absolute inset-0 bg-brand-skyblue/20 blur-2xl rounded-full group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-brand-skyblue bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80 font-light tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-white to-transparent"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-brand-skyblue/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-brand-skyblue/20 rounded-full animate-reverse-spin-slow"></div>
      </div>

      {/* Products Section - Enhanced with animations */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-brand-white to-brand-skyblue/5">
        <div className="max-w-6xl mx-auto">
          <ProductsSection products={products} />
        </div>
      </section>

      {/* Case Studies Section - Enhanced with animations */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-brand-skyblue/5 to-brand-white">
        <div className="max-w-6xl mx-auto">
          <CaseStudiesSection caseStudies={caseStudies} />
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
  );
}

// New component for animated products
interface Product {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ProductsSection = ({ products }: { products: Product[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <span className="text-brand-skyblue text-sm font-semibold tracking-wider uppercase">Our Solutions</span>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-darkblue mt-4 mb-6">
          Comprehensive Legal Tech Solutions
        </h2>
        <div className="w-24 h-1 bg-brand-skyblue mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
              transition-all duration-300 border border-brand-skyblue/10 
              hover:border-brand-skyblue/30"
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// New component for animated case studies
const CaseStudiesSection = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-brand-darkblue text-center mb-4">
        Case Studies
      </h2>
      <p className="text-xl text-brand-blue/80 text-center mb-12 max-w-3xl mx-auto">
        Solving real world problems
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
