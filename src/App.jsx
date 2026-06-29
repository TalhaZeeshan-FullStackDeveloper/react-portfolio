import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

function App() {
  // Inside your App component
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [sending, setSending] = useState(false);

const WHATSAPP_NUMBER = '923260971621';

const handleSendWhatsApp = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.message) return;
  
  setSending(true);
  
  const text = `*New Portfolio Message*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  
  window.open(url, '_blank');
  
  setTimeout(() => {
    setSending(false);
    setFormData({ name: '', email: '', message: '' });
  }, 1500);
};

  // Marquee simple scrolling list
  const marqueeSkills = [
    'Laravel Framework', 'PHP 8.x', 'MySQL Architecture', 'RESTful APIs', 
    'MVC Design Pattern', 'Tailwind CSS v4', 'Bootstrap 5', 'Blade Engine', 
    'JavaScript ES6', 'Git & GitHub', 'Database Optimization', 'Postman Workflow'
  ];

  // Structured Matrix for the Dedicated Skills Section
  const skillsMatrix = [
    {
      category: 'Core Backend Engine',
      items: ['Laravel Framework', 'PHP 8.x Core', 'MVC Architecture', 'RESTful API Engineering', 'Blade Template Engine']
    },
    {
      category: 'Database & Security',
      items: ['MySQL Database', 'Relational Database Architecture', 'Query Optimization', 'Database Migrations']
    },
    {
      category: 'Frontend Interfaces',
      items: ['Tailwind CSS v4', 'Bootstrap 5 Framework', 'JavaScript (ES6+)', 'Responsive Web UI Design']
    },
    {
      category: 'Workflows & Tools',
      items: ['Git Version Control', 'GitHub Repositories', 'Postman API Testing', 'XAMPP / Local Environments']
    }
  ];

  const projects = [
    {
      title: 'Restaurant Management System',
      category: 'Full-Stack Integration',
      description: 'An enterprise ecosystem engineered with optimized relational query mechanisms, live order tracking nodes, and dynamic billing matrices.',
      tech: ['Laravel', 'MySQL', 'Bootstrap 5', 'Blade'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      liveLink: 'https://your-live-site.com',
      githubLink: 'https://github.com/TalhaZeeshan-FullStackDeveloper'
    },
    {
      title: 'E-commerce Platform',
      category: 'E-Commerce Architecture',
      description: 'Slick digital commerce framework integrating comprehensive authentication guards, secure multi-state session carts, and reactive checkout pipelines.',
      tech: ['Laravel Framework', 'JavaScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d286b?auto=format&fit=crop&w=600&q=80',
      liveLink: 'https://your-live-site.com',
      githubLink: 'https://github.com/TalhaZeeshan-FullStackDeveloper'
    },
    {
      title: 'Hospital Management System',
      category: 'Enterprise Middleware',
      description: 'High-availability medical automation hub regulating secure patient record charts, active scheduler matrices, and automated invoices.',
      tech: ['PHP MVC', 'MySQL', 'Tailwind Core'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      liveLink: 'https://your-live-site.com',
      githubLink: 'https://github.com/TalhaZeeshan-FullStackDeveloper'
    }
  ];

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form action implementation can be expanded here
    alert(`Transmission initialized for: ${formState.name}`);
  };

  return (
    <div className="min-h-screen bg-[#06040a] text-[#f1f0f5] antialiased font-sans overflow-x-hidden selection:bg-[#a78bfa] selection:text-[#06040a]">
      
      {/* Background Subtle Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-20"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#06040a]/90 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-black tracking-[0.2em] uppercase text-white hover:text-[#a78bfa] transition-colors duration-300">
            TZ<span className="text-[#a78bfa] neon-text-purple">.</span>
          </a>
          
          <nav className="hidden md:flex space-x-10 text-xs font-bold tracking-widest uppercase text-slate-300">
            <a href="#about" className="hover:text-[#a78bfa] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#a78bfa] transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-[#a78bfa] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#a78bfa] transition-colors">Systems</a>
            <a href="#education" className="hover:text-[#a78bfa] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#a78bfa] transition-colors">Contact</a>
          </nav>

          {/* Upgraded Contact Component With Active Neon Shadow Glow */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="border border-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,0.35)] px-6 py-2.5 rounded-none text-xs font-bold tracking-widest uppercase text-white bg-[#a78bfa]/5 hover:bg-[#a78bfa] hover:text-[#06040a] hover:shadow-[0_0_25px_rgba(232,121,249,0.6)] transition-all duration-300">
              Connect Case
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-300 hover:text-white transition-colors">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#0d091a] border-b border-white/[0.08] px-6 py-6 space-y-4 flex flex-col text-xs font-bold tracking-widest uppercase">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#a78bfa] py-1">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#a78bfa] py-1">Expertise</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#a78bfa] py-1">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#a78bfa] py-1">Systems</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#a78bfa] py-1">Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#a78bfa] py-1">Contact</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-[#a78bfa] text-[#06040a] text-center font-bold py-3 shadow-[0_0_15px_rgba(167,139,250,0.4)]">Connect Case</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <motion.section 
  id="about" 
  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-32 lg:pb-32"
>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 bg-[#130d26] border border-[#a78bfa]/50 text-[#a78bfa] neon-text-purple text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-none mb-8 shadow-[0_0_15px_rgba(167,139,250,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_10px_#a78bfa] animate-pulse"></span> Engine Active // Remote Deployment
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Architecting High-Scale <br />
              <span className="text-[#a78bfa] neon-text-purple">Laravel Systems</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 mb-10 leading-relaxed font-normal max-w-xl">
              I am <span className="text-white font-bold border-b border-[#a78bfa]">Talha Zeeshan</span>. A software engineer focused on building highly optimized, crystal-clean, and modular full-stack web architectures with 1.5 years of professional industry-tested experience at Devicon Software House.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a href="https://github.com/TalhaZeeshan-FullStackDeveloper" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#a78bfa] neon-text-purple transition-colors duration-200 border-b-2 border-[#a78bfa]/30 pb-1">
                GitHub Core //
              </a>
              <a href="https://www.linkedin.com/in/talha-zeeshan-developer-0b7293389" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#a78bfa] neon-text-purple transition-colors duration-200 border-b-2 border-[#a78bfa]/30 pb-1">
                LinkedIn Node //
              </a>
              <a href="mailto:talhazeeshan61@gmail.com" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#a78bfa] neon-text-purple transition-colors duration-200 border-b-2 border-[#a78bfa]/30 pb-1">
                Secure Mail //
              </a>
            </div>
          </div>

          {/* Profile Picture Frame: Realistic Colors + Multi-Layer Circular Glowing Border */}
          <div className="order-1 lg:order-2 mx-auto lg:mx-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 group">
              {/* Animated Outer Orbit Neon Glow Ring */}
              <div className="absolute inset-[-4px] rounded-full border-2 animate-profile-glow -z-10"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden border border-[#a78bfa]/40 bg-[#0d091a] flex items-center justify-center p-1 shadow-[0_0_20px_rgba(167,139,250,0.2)] group-hover:shadow-[0_0_35px_rgba(232,121,249,0.5)] transition-all duration-500">
                <img 
                  src="src\assets\Gemini.png"
                  alt="Talha Zeeshan" 
                  className="w-full h-full rounded-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
</motion.section>
      

      {/* Sharp Infinite Moving Text Line */}
      <section className="border-y border-white/[0.06] bg-[#0c0817] py-6 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-12 text-xs font-black tracking-[0.25em] uppercase text-white/40">
          {Array(4).fill(marqueeSkills).flat().map((skill, index) => (
            <span key={index} className="hover:text-[#a78bfa] transition-colors duration-200">
              {skill} <span className="ml-12 text-[#a78bfa] neon-text-purple">//</span>
            </span>
          ))}
        </div>
      </section>

     {/* Technical Skills Matrix */}
<motion.section 
  id="skills" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.2 }} 
  variants={sectionVariants}
  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
>
  <div className="mb-16">
    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a78bfa] neon-text-purple">01 // Engineering Grid</span>
    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Technical Core Stack</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {skillsMatrix.map((block, i) => (
      <div key={i} className="sharp-glow-card p-6 rounded-none group">
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/[0.04]">
          <h3 className="text-xs font-black tracking-wider uppercase text-white group-hover:text-[#a78bfa] transition-colors duration-300">
            {block.category}
          </h3>
          <span className="text-[10px] font-mono text-[#a78bfa]/50 font-bold">[0{i+1}]</span>
        </div>
        <ul className="space-y-3.5">
          {block.items.map((skill, sIdx) => (
            <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-300 group-hover:text-white transition-colors">
              <span className="w-1 h-1 bg-[#a78bfa] shadow-[0_0_6px_#a78bfa]"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</motion.section>

      {/* Experience Section */}
<motion.section 
  id="experience" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.2 }} 
  variants={sectionVariants}
  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8"
>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    <div>
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a78bfa] neon-text-purple">02 // Timeline</span>
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Work History</h2>
    </div>
    
    <div className="lg:col-span-2 border-l border-white/[0.08] pl-6 sm:pl-10 space-y-12">
      <div className="relative group">
        <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_10px_#a78bfa]"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-[#a78bfa] transition-colors duration-200">Full Stack Web Developer</h3>
          <span className="text-[10px] font-mono font-bold text-[#a78bfa] bg-[#a78bfa]/10 px-2.5 py-0.5 border border-[#a78bfa]/20 uppercase tracking-wider">1.5 Years Professional Industry Experience</span>
        </div>
        
        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">Devicon Software House</p>
        
        <ul className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
          <li>• Architected and deployed enterprise-grade full-stack web applications using Laravel and PHP.</li>
          <li>• Engineered interactive analytical dashboards, administrative configurations, and dynamic user modules.</li>
          <li>• Styled slick, fluid user interfaces targeting high-accuracy responsive metrics with Bootstrap 5.</li>
          <li>• Optimized complex MySQL relational structures to achieve clean querying and performant access.</li>
        </ul>
      </div>
    </div>
  </div>
</motion.section>

      {/* Production Projects Portfolio */}
<motion.section 
  id="projects" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.1 }} 
  variants={sectionVariants}
  className="border-t border-white/[0.05] bg-[#040207] mt-24 py-24 sm:py-32"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-16">
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a78bfa] neon-text-purple">03 // Registries</span>
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Production Systems Portfolio</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div 
          key={i} 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className="sharp-glow-card rounded-none flex flex-col justify-between overflow-hidden group"
        >
          <div>
            <div className="w-full h-44 overflow-hidden border-b border-[#a78bfa]/20 relative bg-[#130d26]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d091a] via-transparent to-transparent opacity-40"></div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#a78bfa] uppercase bg-[#a78bfa]/10 px-2.5 py-1 border border-[#a78bfa]/30 shadow-[0_0_10px_rgba(167,139,250,0.1)]">{project.category}</span>
                <span className="text-[#a78bfa]/40 text-xs font-bold">// 0{i+1}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono text-slate-400">
                    #{t.toLowerCase().replace(" ", "")}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 pt-4 border-t border-white/[0.04] flex justify-between items-center gap-4">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-[11px] font-black tracking-widest uppercase text-white hover:text-[#a78bfa] hover:neon-text-purple transition-all duration-200 border-b border-white/10 hover:border-[#a78bfa] pb-0.5"
            >
              Visit Site ↗
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-[11px] font-black tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-200"
            >
              GitHub //
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

    {/* Education Background */}
<motion.section 
  id="education" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.2 }} 
  variants={sectionVariants}
  className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
>
  <div className="mb-16">
    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a78bfa] neon-text-purple">04 // Roots</span>
    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Engineering Education</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { status: '6th Semester Running', title: 'BS Software Engineering', school: 'The Islamia University of Bahawalpur', loc: 'RYK Campus' },
      { status: 'HSSC Education', title: 'Intermediate (FSc)', school: 'Oxbridge College', loc: 'Rahim Yar Khan' },
      { status: 'Secondary Education', title: 'Matriculation', school: 'National Garrison School', loc: 'Rahim Yar Khan' }
    ].map((edu, i) => (
      <motion.div 
        key={i} 
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        className="group relative bg-[#0d091a] border border-white/[0.05] p-8 rounded-none transition-all duration-500 hover:-translate-y-2 hover:border-[#a78bfa]/50 hover:shadow-[0_0_25px_rgba(167,139,250,0.15)]"
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#a78bfa]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-[#a78bfa] uppercase transition-colors">
          {edu.status}
        </span>
        <h3 className="text-lg font-bold text-white mt-2 group-hover:text-[#a78bfa] transition-colors duration-300">
          {edu.title}
        </h3>
        <p className="text-slate-300 text-xs mt-1">{edu.school}</p>
        <p className="text-slate-500 text-[10px] tracking-wider uppercase font-bold mt-4 border-t border-white/[0.05] pt-4">
          {edu.loc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>

    {/* Updated Contact Section */}
<motion.section 
  id="contact" 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.2 }} 
  variants={sectionVariants}
  className="border-t border-white/[0.05] bg-[#040207] py-24 sm:py-32"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-16">
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a78bfa] neon-text-purple">05 // Uplink</span>
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">Open A Connection</h2>
      <p className="text-slate-400 text-sm mt-3 max-w-lg">Got a project, a proposal, or just want to talk code? Fill the form below — your message will be sent directly to my WhatsApp.</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* Contact Cards */}
      <div className="lg:col-span-2 space-y-6">
        {[
          { icon: '💬', label: 'WhatsApp Direct', val: '+92 326 0971621', link: `https://wa.me/923260971621`, color: '#25d366' },
          { icon: '✉️', label: 'Secure Email', val: 'talhazeeshan61@gmail.com', link: 'mailto:talhazeeshan61@gmail.com', color: '#a78bfa' },
          { icon: '💼', label: 'LinkedIn Profile', val: 'Talha Zeeshan', link: 'https://www.linkedin.com/in/talha-zeeshan-developer-0b7293389', color: '#0a66c2' },
          { icon: '📦', label: 'GitHub Repository', val: 'TalhaZeeshan-Dev', link: 'https://github.com/TalhaZeeshan-FullStackDeveloper', color: '#ffffff' }
        ].map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer"
            className="flex items-center gap-4 p-5 bg-[#0d091a] border border-white/[0.05] hover:border-white/20 group transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-xl">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">{item.label}</p>
              <p className="text-sm font-bold text-white transition-colors">{item.val}</p>
            </div>
            <span className="ml-auto text-slate-600 group-hover:text-white">↗</span>
          </a>
        ))}
      </div>

      {/* WhatsApp Form */}
      <div className="lg:col-span-3">
        <div className="bg-[#0d091a] border border-white/[0.05] p-8">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/[0.04]">
            <span className="text-[#25d366]">💬</span>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-300">Send via WhatsApp</p>
            <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold text-[#25d366] bg-[#25d366]/10 border border-[#25d366]/20 px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse"></span> Online
            </span>
          </div>
          <div className="space-y-5">
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your Name *" className="w-full bg-[#06040a] border border-white/[0.07] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a78bfa]/50" />
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email (Optional)" className="w-full bg-[#06040a] border border-white/[0.07] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a78bfa]/50" />
            <textarea rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Describe your project or query *" className="w-full bg-[#06040a] border border-white/[0.07] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#a78bfa]/50 resize-none" />
            
            <button onClick={handleSendWhatsApp} disabled={!formData.name || !formData.message || sending}
              className="w-full bg-[#25d366] hover:bg-[#1db954] disabled:opacity-50 text-[#06040a] font-black text-xs tracking-widest uppercase py-4 transition-all">
              {sending ? 'Opening...' : 'Send on WhatsApp ↗'}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] bg-[#030205] py-12 text-center text-[10px] tracking-[0.2em] text-slate-500 uppercase font-bold">
        <p>© {new Date().getFullYear()} Talha Zeeshan. Powered cleanly by React & Tailwind v4.</p>
      </footer>

    </div>
  );
}

export default App;            