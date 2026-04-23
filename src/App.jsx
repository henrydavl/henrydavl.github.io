import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Layers, 
  ChevronRight, 
  Mail, 
  MapPin, 
  ExternalLink,
  Cpu,
  ShieldCheck,
  Zap,
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

const MotionButton = motion.button;
const MotionDiv = motion.div;
const MotionForm = motion.form;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const ThemeToggle = ({ theme, toggleTheme }) => (
  <MotionButton
    whileTap={{ scale: 0.9 }}
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    className="shrink-0 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors"
  >
    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
  </MotionButton>
);

const ProjectCard = ({ project, index }) => {
  return (
    <MotionDiv
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group md:perspective-1000 md:h-[500px]"
    >
      <div className="relative w-full md:h-full md:transition-all md:duration-700 md:preserve-3d md:group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="relative md:absolute md:inset-0 md:backface-hidden bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col">
          <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
            <div className="px-3 sm:px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.2em]">
              {project.platform}
            </div>
            {project.period && (
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-1">{project.period}</span>
            )}
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 md:mb-10 flex-grow leading-relaxed text-base md:text-lg font-medium md:line-clamp-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 pt-5 md:pt-6 border-t border-slate-50 dark:border-slate-700 mt-auto">
             {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 border border-slate-100 dark:border-slate-600 rounded-xl text-xs font-bold">{tech}</span>
            ))}
          </div>
          
          <div className="hidden md:block mt-4 text-center text-[10px] font-bold text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Flip for Preview
          </div>
        </div>

        {/* Back Face (Device Mockup) */}
        <div className="relative mt-4 min-h-[390px] md:min-h-0 md:mt-0 md:absolute md:inset-0 md:backface-hidden md:rotate-y-180 bg-slate-900 dark:bg-black rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center p-5 md:p-6">
          {/* Simple iPhone-style Mockup */}
          <div className="relative w-[min(210px,70vw)] h-[340px] md:w-[240px] md:h-[440px] bg-slate-800 rounded-[2.5rem] md:rounded-[3rem] border-[7px] md:border-[8px] border-slate-700 shadow-2xl overflow-hidden group/device">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-slate-700 rounded-b-2xl z-20" /> {/* Notch */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/device:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            
            <div className="absolute inset-0 flex items-center justify-center z-30 md:opacity-0 md:group-hover/device:opacity-100 transition-opacity">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="p-4 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all transform scale-90 group-hover/device:scale-100 shadow-2xl"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-5 md:bottom-6 left-6 md:left-8 right-6 md:right-8 text-white pointer-events-none">
            <h4 className="text-base md:text-lg font-bold truncate">{project.title}</h4>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">View Prototype</div>
          </div>
        </div>
      </div>
    </MotionDiv>
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
    
    // Construct Gmail Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=henrydavidlie@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

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
        <nav className="flex justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-white/70 dark:bg-slate-900/70 sticky top-0 z-50 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
          <MotionH1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            HENRY<span className="text-blue-600">.</span>LIE
          </MotionH1>
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
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a
              href="#contact"
              aria-label="Contact Henry"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 border border-slate-900 dark:border-white active:scale-95 transition-transform"
            >
              <Mail size={20} />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 text-center max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[calc(100svh-73px)] md:min-h-[90vh]">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-blue-700 dark:text-blue-400 font-bold text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-6 sm:mb-8 border border-blue-100 dark:border-blue-900/30 shadow-sm"
          >
            <MapPin size={14} className="text-blue-500" />
            Jakarta Barat, Indonesia
          </MotionDiv>
          
          <MotionH2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tighter leading-[0.95] md:leading-[0.9]"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              Mobile Experiences.
            </span>
          </MotionH2>
          
          <MotionP 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-10 md:mb-12 max-w-3xl font-medium leading-relaxed"
          >
            Senior Mobile Developer specializing in high-performance Android & iOS systems, focused on scalability and clean architecture.
          </MotionP>
          
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex w-full max-w-sm sm:max-w-none flex-col sm:flex-row justify-center gap-4 sm:gap-5"
          >
            <a href="#experience" className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-blue-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              Explore Portfolio
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex justify-center gap-3">
              <a href="https://www.linkedin.com/in/henrydavidlie/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" className="p-4 sm:p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
                <LinkedInIcon size={24} />
              </a>
              <a href="https://github.com/henrydavl" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" className="p-4 sm:p-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all shadow-sm">
                <GitHubIcon size={24} />
              </a>
            </div>
          </MotionDiv>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <MotionDiv 
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square max-w-sm md:max-w-none mx-auto rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden shadow-2xl relative z-10">
                   <div className="w-full h-full flex items-center justify-center">
                      <Smartphone size={96} className="text-white/20 md:w-[120px] md:h-[120px]" />
                   </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl" />
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
              </MotionDiv>
              
              <MotionDiv
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xs sm:text-sm font-black text-blue-600 uppercase tracking-[0.24em] sm:tracking-[0.3em] mb-4">Behind the Code</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-900 dark:text-white leading-tight">Driving innovation through technical excellence.</h3>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                  I am a collaborative team player experienced in building and maintaining production-grade applications. Whether it's optimizing system efficiency, cutting transaction latency on EDC devices, or contributing to reusable, modular codebases.
                </p>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  My approach combines deep technical expertise with a commitment to delivering reliable solutions that scale in fast-paced environments.
                </p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="expertise" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 border border-white/20 rounded-full" />
            <div className="absolute bottom-[10%] right-[5%] w-96 h-96 border border-white/10 rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <MotionDiv 
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12 md:mb-24"
            >
              <h2 className="text-xs sm:text-sm font-black text-blue-400 uppercase tracking-[0.24em] sm:tracking-[0.3em] mb-4">Technical Arsenal</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Specialized Expertise</h3>
            </MotionDiv>
            
            <div className="grid md:grid-cols-3 gap-5 md:gap-8">
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
                <MotionDiv 
                  key={i}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start gap-4 mb-6 md:mb-8">
                    <div className={`w-14 h-14 md:w-16 md:h-16 shrink-0 ${skill.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] text-blue-400 text-right">{skill.tag}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{skill.title}</h3>
                  <p className="text-slate-400 mb-6 md:mb-8 leading-relaxed font-medium flex-grow">
                    {skill.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 border border-white/5 rounded-lg text-xs font-semibold text-slate-300">{tech}</span>
                    ))}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section with Timeline */}
        <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <MotionDiv
               viewport={{ once: true }}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-xs sm:text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.24em] sm:tracking-[0.3em] mb-4">Career Progression</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Professional Journey</h3>
            </MotionDiv>
            <MotionDiv
               viewport={{ once: true }}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="grid grid-cols-2 md:flex items-center gap-4 md:gap-6"
            >
              <div className="flex flex-col items-start md:items-end">
                <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">5+</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-200 dark:bg-slate-800" />
              <div className="flex flex-col items-start md:items-end">
                <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">10+</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Major Shipments</span>
              </div>
            </MotionDiv>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 relative">
              {projectsData.map((project, index) => (
                <div key={index} className={index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:mt-24"}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: "Latency Reduced", val: "30%", icon: <Zap size={20} className="text-yellow-500" /> },
                { label: "Devices Deployed", val: "100k+", icon: <Cpu size={20} className="text-blue-500" /> },
                { label: "Build Time Saved", val: "40%", icon: <Zap size={20} className="text-indigo-500" /> },
                { label: "Transactions/Mo", val: "1M+", icon: <ShieldCheck size={20} className="text-emerald-500" /> }
              ].map((stat, i) => (
                <MotionDiv 
                  key={i} 
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center shadow-sm"
                >
                  <div className="inline-flex p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 mb-3 sm:mb-4">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.val}</div>
                  <div className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.14em] sm:tracking-widest leading-snug">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/30 relative">
          <div className="max-w-4xl mx-auto">
            <MotionDiv 
               viewport={{ once: true }}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-center mb-12 md:mb-24"
            >
              <h2 className="text-xs sm:text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.24em] sm:tracking-[0.3em] mb-4">Academic Background</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Education</h3>
            </MotionDiv>
            
            <div className="space-y-5 md:space-y-8">
              {educationData.map((edu, index) => (
                <MotionDiv 
                  key={index}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="group relative p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-800 rounded-3xl md:rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-base md:text-lg">{edu.degree}</p>
                    </div>
                    <span className="w-fit px-4 md:px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-medium text-base md:text-lg">
                    {edu.description}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Full Form */}
        <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <MotionDiv 
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-900 dark:bg-black rounded-3xl md:rounded-[4rem] p-5 sm:p-8 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl"
            >
              <div className="grid lg:grid-cols-5 gap-10 md:gap-16 relative z-10">
                <div className="lg:col-span-2 text-white">
                  <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter leading-tight">
                    Ready for your next <span className="text-blue-500 italic">breakthrough?</span>
                  </h2>
                  <p className="text-slate-400 mb-8 md:mb-12 text-base md:text-lg font-medium">
                    Currently accepting senior roles and high-impact mobile projects. Let's discuss how I can help your team.
                  </p>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="shrink-0 p-3 bg-blue-600 rounded-xl"><Mail size={20} /></div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</div>
                        <div className="font-bold text-sm sm:text-base break-all">henrydavidlie@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="shrink-0 p-3 bg-indigo-600 rounded-xl"><MapPin size={20} /></div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Location</div>
                        <div className="font-bold text-sm sm:text-base">Jakarta, Indonesia</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <MotionDiv 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 text-center h-full flex flex-col items-center justify-center shadow-2xl"
                      >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">Message Received!</h3>
                        <p className="text-slate-500 font-medium text-base md:text-lg mb-8">
                          Thanks for reaching out, Henry. I'll get back to you within 24 hours.
                        </p>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </MotionDiv>
                    ) : (
                      <MotionForm 
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
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" 
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
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" 
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
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium resize-none" 
                            placeholder="Tell me about your project or role..."
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full group px-6 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-black text-lg sm:text-xl hover:bg-white hover:text-slate-900 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                          <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Inquiry
                        </button>
                      </MotionForm>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 md:py-12 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-lg font-black tracking-tighter dark:text-white">
              HENRY<span className="text-blue-600">.</span>LIE
            </div>
            <div className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-center">
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
