import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Code2, 
  Layers, 
  ChevronRight, 
  Mail, 
  MapPin, 
  ExternalLink,
  Cpu,
  ShieldCheck,
  Zap,
  Briefcase,
  Users,
  Sun,
  Moon,
  Send,
  CheckCircle2 as CheckCircle
} from 'lucide-react';
import projectsData from './data/projects.json';
import educationData from './data/education.json';

const GitHubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={toggleTheme}
    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors"
  >
    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
  </motion.button>
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group perspective-1000 h-[500px]"
    >
      <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
              {project.platform}
            </div>
            {project.period && (
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.period}</span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-10 flex-grow leading-relaxed text-lg font-medium line-clamp-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-700 mt-auto">
             {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 border border-slate-100 dark:border-slate-600 rounded-xl text-xs font-bold">{tech}</span>
            ))}
          </div>
          
          <div className="mt-4 text-center text-[10px] font-bold text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Flip for Preview
          </div>
        </div>

        {/* Back Face (Device Mockup) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 dark:bg-black rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center p-6">
          {/* Simple iPhone-style Mockup */}
          <div className="relative w-[240px] h-[440px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden group/device">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-2xl z-20" /> {/* Notch */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/device:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            
            <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover/device:opacity-100 transition-opacity">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform scale-90 group-hover/device:scale-100 shadow-2xl"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 left-8 right-8 text-white pointer-events-none">
            <h4 className="text-lg font-bold truncate">{project.title}</h4>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">View Prototype</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Portfolio Inquiry from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:henrydavidlie@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className={theme}>
      <div className="font-sans text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 min-h-screen selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden transition-colors duration-300">
        
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-[120px]" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-[100px]" />
          <div className="absolute bottom-[10%] left-[15%] w-[25%] h-[25%] rounded-full bg-sky-100/50 dark:bg-sky-900/10 blur-[80px]" />
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center px-8 py-5 bg-white/70 dark:bg-slate-900/70 sticky top-0 z-50 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            HENRY<span className="text-blue-600">.</span>LIE
          </motion.h1>
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {['About', 'Expertise', 'Experience', 'Education'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <a href="#contact" className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all transform hover:scale-105 active:scale-95">
                Hire Me
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-32 pb-32 px-6 text-center max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[90vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-900/30 shadow-sm"
          >
            <MapPin size={14} className="text-blue-500" />
            Jakarta Barat, Indonesia
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              Mobile Experiences.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-3xl font-medium leading-relaxed"
          >
            Senior Mobile Developer specializing in high-performance Android & iOS systems, focused on scalability and clean architecture.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#experience" className="group px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-blue-500/30 flex items-center gap-3 transform hover:-translate-y-1">
              Explore Portfolio
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/henrydavidlie/" target="_blank" rel="noopener noreferrer" className="p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
                <LinkedInIcon size={24} />
              </a>
              <a href="https://github.com/henrydavl" target="_blank" rel="noopener noreferrer" className="p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all shadow-sm">
                <GitHubIcon size={24} />
              </a>
            </div>
          </motion.div>
        </header>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden shadow-2xl relative z-10">
                   <div className="w-full h-full flex items-center justify-center">
                      <Smartphone size={120} className="text-white/20" />
                   </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl" />
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
              </motion.div>
              
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Behind the Code</h2>
                <h3 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">Driving innovation through technical excellence.</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  I am a collaborative team player experienced in building and maintaining production-grade applications. Whether it's optimizing system efficiency, cutting transaction latency on EDC devices, or contributing to reusable, modular codebases.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  My approach combines deep technical expertise with a commitment to delivering reliable solutions that scale in fast-paced environments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="expertise" className="py-32 px-6 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 border border-white/20 rounded-full" />
            <div className="absolute bottom-[10%] right-[5%] w-96 h-96 border border-white/10 rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-24"
            >
              <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Technical Arsenal</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Specialized Expertise</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="text-white" size={28} />,
                  title: "Core Native",
                  desc: "Building fluid apps using modern frameworks with a focus on UI/UX and high-performance data handling.",
                  techs: ["Swift/SwiftUI", "Kotlin/Compose", "UIKit", "Combine/Coroutines"],
                  tag: "Senior Level",
                  color: "bg-blue-600"
                },
                {
                  icon: <Cpu className="text-white" size={28} />,
                  title: "Systems & Fintech",
                  desc: "Specialized in low-latency payment processing, EMV/APDU protocols, and POS hardware integrations.",
                  techs: ["EMV & APDU", "ISO 8583", "Payment SDKs", "EDC Integration"],
                  tag: "Specialist",
                  color: "bg-[#3DDC84]"
                },
                {
                  icon: <Layers className="text-white" size={28} />,
                  title: "Architecture",
                  desc: "Leading engineering teams through multi-module transitions and strict clean architecture compliance.",
                  techs: ["Clean Architecture", "Modularization", "CI/CD Pipeline", "TDD"],
                  tag: "Core Focus",
                  color: "bg-indigo-600"
                }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">{skill.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{skill.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-medium flex-grow">
                    {skill.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 border border-white/5 rounded-lg text-xs font-semibold text-slate-300">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section with Timeline */}
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
               viewport={{ once: true }}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">Career Progression</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Professional Journey</h3>
            </motion.div>
            <motion.div
               viewport={{ once: true }}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-6"
            >
              <div className="flex flex-col items-end">
                <span className="text-4xl font-black text-slate-900 dark:text-white">5+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col items-end">
                <span className="text-4xl font-black text-slate-900 dark:text-white">10+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Major Shipments</span>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 relative">
              {projectsData.map((project, index) => (
                <div key={index} className={index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:mt-24"}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Latency Reduced", val: "30%", icon: <Zap size={20} className="text-yellow-500" /> },
                { label: "Devices Deployed", val: "100k+", icon: <Cpu size={20} className="text-blue-500" /> },
                { label: "Build Time Saved", val: "40%", icon: <Zap size={20} className="text-indigo-500" /> },
                { label: "Transactions/Mo", val: "1M+", icon: <ShieldCheck size={20} className="text-emerald-500" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center shadow-sm"
                >
                  <div className="inline-flex p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 mb-4">{stat.icon}</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 px-6 bg-slate-50 dark:bg-slate-900/30 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div 
               viewport={{ once: true }}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-center mb-24"
            >
              <h2 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-4">Academic Background</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Education</h3>
            </motion.div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="group relative p-10 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">{edu.degree}</p>
                    </div>
                    <span className="px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-medium text-lg">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Full Form */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-900 dark:bg-black rounded-[4rem] p-10 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl"
            >
              <div className="grid lg:grid-cols-5 gap-16 relative z-10">
                <div className="lg:col-span-2 text-white">
                  <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                    Ready for your next <span className="text-blue-500 italic">breakthrough?</span>
                  </h2>
                  <p className="text-slate-400 mb-12 text-lg font-medium">
                    Currently accepting senior roles and high-impact mobile projects. Let's discuss how I can help your team.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="p-3 bg-blue-600 rounded-xl"><Mail size={20} /></div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</div>
                        <div className="font-bold">henrydavidlie@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="p-3 bg-indigo-600 rounded-xl"><MapPin size={20} /></div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Location</div>
                        <div className="font-bold">Jakarta, Indonesia</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center shadow-2xl"
                      >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Message Received!</h3>
                        <p className="text-slate-500 font-medium text-lg mb-8">
                          Thanks for reaching out, Henry. I'll get back to you within 24 hours.
                        </p>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onSubmit={handleFormSubmit}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                            <input 
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" 
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                            <input 
                              required
                              type="email"
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" 
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">How can I help you?</label>
                          <textarea 
                            required
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium resize-none" 
                            placeholder="Tell me about your project or role..."
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full group px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                          <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Inquiry
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-lg font-black tracking-tighter dark:text-white">
              HENRY<span className="text-blue-600">.</span>LIE
            </div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">
              © 2026 Crafted with Passion
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="https://www.linkedin.com/in/henrydavidlie/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors"><LinkedInIcon size={20} /></a>
              <a href="https://github.com/henrydavl" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors"><GitHubIcon size={20} /></a>
              <a href="mailto:henrydavidlie@gmail.com" className="hover:text-blue-600 dark:hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;