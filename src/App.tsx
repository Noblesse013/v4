import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink, ChevronRight, Code2, BookOpen, Briefcase, GraduationCap, User2, Sun, Moon } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

    { title : "Rate my professor",
      description:  "A web application  designed to help students rate, review, and find the best professors for their learning journey. It includes a chatbot assistant to help users navigate the platform.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/Noblesse013/Rate-my-professorv1"
    },

    { title : "Fio’s AI Summarizer App",
      description: "An AI-powered tool that extracts key insights from lengthy texts and articles. ",
      tech: ["React", "Tailwind CSS", "OpenAI"],
      github: "https://github.com/Noblesse013/fio-s-ai-summarizer-app"	
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
        <div className="relative z-10 text-center animate-slide-up">
          <h1 className={`text-6xl font-bold mb-4 ${isDarkMode ? 'text-[#FF4655]' : 'text-[#FF4655]'} animate-title drop-shadow-glow`}>Mehreen Mallick Fiona</h1>
          <p className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} animate-subtitle drop-shadow-text`}>Aspiring Software Engineer</p>
          <div className="mt-8 flex gap-4 justify-center animate-fade-in">
            <a href="https://github.com/Noblesse013" className={`p-2 hover:text-[#FF4655] transition-colors duration-300 transform hover:scale-110 shadow-md hover:shadow-lg rounded-full ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mehreen-mallick-fiona/" className={`p-2 hover:text-[#FF4655] transition-colors duration-300 transform hover:scale-110 shadow-md hover:shadow-lg rounded-full ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
              <Linkedin size={24} />
            </a>
            <a href="mehreen.mallick.fiona@g.bracu.ac.bd" className={`p-2 hover:text-[#FF4655] transition-colors duration-300 transform hover:scale-110 shadow-md hover:shadow-lg rounded-full ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-colors duration-300 shadow-lg ${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
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
                <h3 className="text-xl font-bold drop-shadow-text">Simplifying Cloud Migration</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">
                Nov 29, 2024</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                Enhance Cloud Migration Through Cost Control and Recovery Solutions
                </p>
                <a href="https://rosiechan.hashnode.dev/simplifying-cloud-migration-key-strategies-for-cost-and-disaster-management" className="mt-4 text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow">Read More</a>
              </article>
              <article className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} p-6 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-up delay-150 shadow-xl hover:shadow-2xl`}>
                <h3 className="text-xl font-bold drop-shadow-text">Building Scalable Systems</h3>
                <p className="text-[#FF4655] mt-2 drop-shadow-text">March 1, 2024</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 drop-shadow-text`}>
                  Best practices for creating systems that can handle massive growth...
                </p>
                <button className="mt-4 text-[#FF4655] hover:underline transition-transform duration-300 hover:translate-x-2 drop-shadow-glow">Read More</button>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-4xl font-bold mb-8 text-[#FF4655] animate-slide-up drop-shadow-glow">CONTACT ME</h2>
          <form className="space-y-6">
            <div className="animate-slide-up">
              <label className="block text-sm font-medium mb-2 drop-shadow-text">Name</label>
              <input
                type="text"
                className={`w-full px-4 py-2 ${
                  isDarkMode ? 'bg-[#1F2326]' : 'bg-white border border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4655] transition-all duration-300 shadow-md`}
                placeholder="Your name"
              />
            </div>
            <div className="animate-slide-up delay-150">
              <label className="block text-sm font-medium mb-2 drop-shadow-text">Email</label>
              <input
                type="email"
                className={`w-full px-4 py-2 ${
                  isDarkMode ? 'bg-[#1F2326]' : 'bg-white border border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4655] transition-all duration-300 shadow-md`}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="animate-slide-up delay-300">
              <label className="block text-sm font-medium mb-2 drop-shadow-text">Message</label>
              <textarea
                className={`w-full px-4 py-2 ${
                  isDarkMode ? 'bg-[#1F2326]' : 'bg-white border border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4655] transition-all duration-300 h-32 shadow-md`}
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF4655] text-white px-8 py-3 rounded-lg hover:bg-[#FF5E6D] transition-all duration-300 transform hover:scale-105 animate-slide-up delay-450 shadow-xl hover:shadow-2xl"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-[#1F2326]' : 'bg-white'} py-8 mt-16 transition-colors duration-300 shadow-lg`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} drop-shadow-text`}>© 2024 Mehreen Mallick Fiona . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;