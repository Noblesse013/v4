import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink, ChevronRight, Code2, BookOpen, Briefcase, GraduationCap, User2, Sun, Moon, Menu, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const projects = [
    {
      title: "Smart-Pantry-Tracker",
      description: "A React component for managing pantry inventory, including item addition, updates, deletions, and recipe suggestions, using Firebase, Material UI and Edamam API.",
      tech: ["React", "Firebase", "Next.js" , "Material UI", "Edamam API"] ,
      github: "https://github.com/Noblesse013/Smart-Pantry-Tracker"
    },
    {
      title: "HelpBot",
      description: "HelpBot is a cutting-edge AI customer support chatbot built using Next.js and Material-UI (MUI). HelpBot provides a user-friendly and engaging experience for customers seeking assistance.",
      tech: ["Next.js", "Tailwind CSS", "Daisy UI"],
      github: "https://github.com/Noblesse013/HelpBotv1"
    },
    {
      title : "Rate my professor",
      description:  "A web application  designed to help students rate, review, and find the best professors for their learning journey. It includes a chatbot assistant to help users navigate the platform.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/Noblesse013/Rate-my-professorv1"
    },
    {
      title : "Fio’s AI Summarizer App",
      description: "An AI-powered tool that extracts key insights from lengthy texts and articles. ",
      tech: ["React", "Tailwind CSS", "OpenAI"],
      github: "https://github.com/Noblesse013/fio-s-ai-summarizer-app"	
    },
    {
      title:" Ghibli Academy Portal ",
      description: "A magical academy dashboard inspired by Studio Ghibli's aesthetic, featuring student profiles, class schedules, and mystical school management. Built with modern web technologies for an immersive magical education experience.",
      tech: ["React", "Tailwind CSS", "Firebase", "Vite"],
      github: "https://github.com/Noblesse013/the-ghibli-academy"
    },
    {
      title:" Self-Love Generator",
      description: "A tool for singles to embrace self-love during Valentine's. Generate personalized affirmations and reminders of your worth!",
      tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      github: 'https://github.com/Noblesse013/self-love-generator'
    },
    {
      title:" Fio's Notebook inspired Portfolio",
      description: "A whimsical and interactive portfolio inspired by a notebook theme.",
      tech: ["HTML", "Javascript", "CSS"],
      github: "https://github.com/Noblesse013/my-personal-portfolio"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML" , "CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Python", "MySQL", "PHP"] },
    { category: "DevOps", items: ["Docker", "Azure" ,"GCP", "CI/CD", "Kubernetes"] }
  ];

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-[#0F1923]' : 'bg-gray-50'}`}>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FF4655]"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0F1923] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl ${
          isDarkMode ? 'bg-[#1F2326] text-white hover:bg-[#FF4655]' : 'bg-white text-gray-900 hover:bg-[#FF4655] hover:text-white'
        }`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 animate-fade-in`}></div>
        <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-[#0F1923] via-transparent to-[#0F1923]' : 'from-gray-50 via-transparent to-gray-50'}`}></div>
        <div className="relative z-10 text-center animate-slide-up px-4">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-[#FF4655]' : 'text-[#FF4655]'} animate-title drop-shadow-glow`}>Mehreen Mallick Fiona</h1>
          <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} animate-subtitle drop-shadow-text`}>Aspiring Software Engineer</p>
          <div className="mt-8 flex gap-4 justify-center animate-fade-in">
            <a href="https://github.com/Noblesse013" className={`p-2 hover:text-[#FF4655] transition-colors duration-300 transform hover:scale-110 shadow-md hover:shadow-lg rounded-full ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mehreen-mallick-fiona/" className={`p-2 hover:text-[#FF4655] transition-colors duration-300 transform hover:scale-110 shadow-md hover:shadow-lg rounded-full ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:mehreen.mallick.fiona@g.bracu.ac.bd" className={`p-2 hover:text-[#FF4655] transition-colors duration-300 transform hover:scale-110 shadow-md hover:shadow-lg rounded-full ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-colors duration-300 shadow-lg ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-8 py-4">
            {[
              { id: 'about', icon: User2, label: 'ABOUT' },
              { id: 'experience', icon: Briefcase, label: 'EXPERIENCE' },
              { id: 'education', icon: GraduationCap, label: 'EDUCATION' },
              { id: 'skills', icon: Code2, label: 'SKILLS' },
              { id: 'projects', icon: ExternalLink, label: 'PROJECTS' },
              { id: 'blog', icon: BookOpen, label: 'BLOG' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${
                  activeSection === id 
                    ? `text-[#FF4655] ${isDarkMode ? 'bg-[#0F1923]' : 'bg-gray-100'}`
                    : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-[#FF4655]`
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex justify-end py-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'text-white hover:bg-[#0F1923]' : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}>
            <div className="py-2 space-y-1">
              {[
                { id: 'about', icon: User2, label: 'ABOUT' },
                { id: 'experience', icon: Briefcase, label: 'EXPERIENCE' },
                { id: 'education', icon: GraduationCap, label: 'EDUCATION' },
                { id: 'skills', icon: Code2, label: 'SKILLS' },
                { id: 'projects', icon: ExternalLink, label: 'PROJECTS' },
                { id: 'blog', icon: BookOpen, label: 'BLOG' }
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-3 rounded transition-all duration-300 ${
                    activeSection === id 
                      ? `text-[#FF4655] ${isDarkMode ? 'bg-[#0F1923]' : 'bg-gray-100'}`
                      : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-[#FF4655]`
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className={`transition-all duration-500 transform ${activeSection === 'about' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#FF4655] animate-slide-up drop-shadow-glow">ABOUT ME</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6 animate-fade-in text-lg drop-shadow-text`}>
            I am a dedicated Computer Science Engineering student with a passion for software development and a strong foundation in Python, Javascript, HTML, and SQL. Continuously expanding my skill set, I actively explore the latest technologies, including machine learning, data science, cloud computing, and Docker through self-directed learning and online courses.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className={`transition-all duration-500 transform ${activeSection === 'experience' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#FF4655] drop-shadow-glow">EXPERIENCE</h2>
            <div className="space-y-8">
              <div className={`relative border-l-2 border-[#FF4655] pl-8 pb-8 animate-slide-up ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} rounded-lg shadow-xl p-6`}>
                <div className="absolute -left-2 top-6 w-4 h-4 bg-[#FF4655] rounded-full animate-pulse shadow-glow"></div>
                <h3 className="text-xl font-bold drop-shadow-text">Software Engineering Fellow </h3>
                <p className="text-[#FF4655] drop-shadow-text">Headstarter ·
                Jul 2024 - Sep 2024 · 3 mos</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={`transition-all duration-500 transform ${activeSection === 'education' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#FF4655] drop-shadow-glow">EDUCATION</h2>
            <div className="space-y-8">
              <div className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-transform duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Brac University</h3>
                <p className="text-[#FF4655] drop-shadow-text">Undergraduate , Computer Science and Engineering </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                2022 - 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`transition-all duration-500 transform ${activeSection === 'skills' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#FF4655] drop-shadow-glow">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category} 
                  className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-bold mb-4 drop-shadow-text">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skill} 
                        className="flex items-center transition-transform duration-300 hover:translate-x-2"
                        style={{ animationDelay: `${(index * 150) + (skillIndex * 100)}ms` }}
                      >
                        <ChevronRight size={16} className="text-[#FF4655] mr-2 drop-shadow-glow" />
                        <span className="drop-shadow-text">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`transition-all duration-500 transform ${activeSection === 'projects' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#FF4655] drop-shadow-glow">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-bold drop-shadow-text">{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-2 py-1 ${isDarkMode ? 'bg-[#0F1923]' : 'bg-gray-100'} rounded text-sm transition-colors duration-300 shadow-md`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="inline-flex items-center mt-4 text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                  >
                    <Github size={16} className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className={`transition-all duration-500 transform ${activeSection === 'blog' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#FF4655] drop-shadow-glow">BLOG</h2>
            <div className="space-y-8">
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">From Words to Equations: The Intersection of Sentences and Linear Algebra</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Jan 22, 2025
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Linking Sentences with Linear Algebra Concepts · Linear algebra often begins with the study of systems of linear equations. However, for understanding...
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/from-words-to-equations-the-intersection-of-sentences-and-linear-algebra" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Machine Learning Basics: Understanding Systems of Equations</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Jan 20, 2025
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Introduction to Basic Systems of Equations in Machine Learning · Introduction Linear algebra might seem like a complicated topic but it's really about...
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/machine-learning-basics-understanding-systems-of-equations" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Simplifying Cloud Migration</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Nov 29, 2024
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Enhance Cloud Migration Through Cost Control and Recovery Solutions
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/simplifying-cloud-migration-key-strategies-for-cost-and-disaster-management" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Virtualization, Containerization, and Microservices: What You Need to Know</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Aug 30, 2024
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Introduction to Virtualization, Containerization, and Microservices for Beginners · In the world of technology, terms like virtualization,...
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/unveiling-the-magic-how-large-language-models-power-everyday-tech" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Docker 101: Basic Commands You Need to Know</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Aug 28, 2024
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Are you new to Docker and wondering where to start? Docker 101 is here to help you learn the essential commands you'll need to manage containers...
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/unveiling-the-magic-how-large-language-models-power-everyday-tech" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Unveiling the Magic: How Large Language Models Power Everyday Tech</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Aug 27, 2024
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Have you ever wondered how your favorite voice assistant understands your commands or how Google Translate knows so many languages? Behind the scenes,...
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/docker-101-basic-commands-you-need-to-know" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up delay-150 shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Getting Started with Docker: A Beginner's Guide</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">Aug 26, 2024</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  What is Docker? Docker is a powerful tool that helps developers build, ship, and run applications by packaging everything the application needs into...
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/getting-started-with-docker-a-beginners-guide"  
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                > Read more </a>
              </article> 
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Generative AI 101: Quick Start Guide</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                  Aug 22, 2024
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Generative AI has become a buzzword in the technology world, representing a groundbreaking shift in how we create and interact with digital content....
                </p>
                <a 
                  href="https://rosiechan.hashnode.dev/generative-ai-101-quick-start-guide" 
                  className="mt-4 inline-block text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow"
                >
                  Read More
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Connect With Me */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-4xl font-bold mb-8 text-[#FF4655] animate-slide-up drop-shadow-glow">CONNECT WITH ME</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/Noblesse013" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl flex flex-col items-center justify-center gap-4`}
            >
              <Github size={32} className="text-[#FF4655]" />
              <h3 className="text-xl font-bold drop-shadow-text">GitHub</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center text-sm`}>
                Check out my projects and contributions
              </p>
            </a>

            <a 
              href="https://www.linkedin.com/in/mehreen-mallick-fiona/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl flex flex-col items-center justify-center gap-4`}
              style={{ animationDelay: '150ms' }}
            >
              <Linkedin size={32} className="text-[#FF4655]" />
              <h3 className="text-xl font-bold drop-shadow-text">LinkedIn</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center text-sm`}>
                Connect with me professionally
              </p>
            </a>

            <a 
              href="mailto:mehreen.mallick.fiona@g.bracu.ac.bd" 
              className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up shadow-xl hover:shadow-2xl flex flex-col items-center justify-center gap-4`}
              style={{ animationDelay: '300ms' }}
            >
              <Mail size={32} className="text-[#FF4655]" />
              <h3 className="text-xl font-bold drop-shadow-text">Email</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center text-sm`}>
                Drop me a message anytime
              </p>
            </a>
          </div>

          <div className={`mt-8 p-6 ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} rounded-lg shadow-xl animate-slide-up delay-450`}>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center text-lg`}>
              I'm always open to new opportunities and collaborations. Feel free to reach out through any of these platforms!
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} py-8 mt-16 transition-colors duration-300 shadow-lg`}>
          <div className="container mx-auto px-4 text-center">
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} drop-shadow-text`}>© 2025 Mehreen Mallick Fiona . All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;