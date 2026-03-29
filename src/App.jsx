import React, { useState } from 'react'
import './index.css'
import profile from './assets/profile.png'
// Premium Portfolio - Sunam Ghosh
// Full-Stack Developer & Educator

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('giit')

  const projects = {
    giit: [
      {
        title: 'GIIT Student Portal (LMS)',
        desc: 'A production-grade Learning Management System streamlining student workflows. Built with a focus on real-time data access and automated document handling.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'Ionic', 'Node.js'],
        features: ['Admission Module', 'WhatsApp Integration', 'Document Issued Module', 'Assignment Module', 'University Question Bank', 'Syllabus Module', 'Timetable Module'],
        liveLink: 'https://mygiit.com/student-login.php'
      },
      {
        title: 'WhatsApp Reminder Module',
        desc: 'Automated messaging feature to fetch user numbers and trigger timely notifications. Built with Node.js and MySQL integrating external messaging APIs.',
        tech: ['Node.js', 'MySQL', 'External API'],
        features: ['Automated Messaging', 'User Number Fetching', 'Timely Notifications', 'API Integration'],
        liveLink: 'https://mygiit.com/admission/general_whatsapp'
      },
      {
        title: 'Timetable Management System',
        desc: 'Dynamic system for managing sessions, semesters, subjects, and faculty allocations across the entire institution. Built for GIIT Professional College.',
        tech: ['Angular', 'Ionic', 'Node.js'],
        features: ['Session Management', 'Semester Planning', 'Subject Allocation', 'Faculty Scheduling', 'Live Sync with Student Apps'],
        liveLink: 'https://mygiit.com/student-management/create_schedule_timetable'
      },
      {
        title: 'GIIT Faculty & Admin Suite',
        desc: 'Advanced management tools for academic planning and institutional control. Designed to handle complex scheduling and resource allocation for GIIT Professional College.',
        tech: ['Angular', 'Node.js', 'MySQL', 'ReactJS'],
        features: ['Faculty Allocation Timetable', 'Subject Allocation Module', 'Online Attendance Tracking', 'Class Analytics', 'Syllabus Management', 'Advanced Timetable Module'],
        liveLink: 'https://mygiit.com/faculty-login.php'
      },
      {
        title: 'Admissions & Prospectus Design',
        desc: 'Created professional templates and comprehensive prospectus for student outreach and strategic admission planning.',
        tech: ['MS Word', 'Design Principles'],
        features: ['Prospectus Creation', 'Template Design', 'Student Outreach Support', 'Admission Strategy'],
        liveLink: 'https://drive.google.com/file/d/158wd0FwHQ94LVKCwRY5g42qEkOezozHP/view'
      },
      {
        title: 'GIIT Communication & ERP',
        desc: 'Centralized ERP system managing institutional database ops and automated communication workflows.',
        tech: ['MongoDB', 'Node.js', 'PHP', 'Express'],
        features: ['WhatsApp Automation', 'Student ERP', 'Course Management', 'Database Optimization', 'Role-based Access Control'],
        liveLink: 'https://mygiit.com/index.php'
      }
    ],
    other: [
      {
        title: 'EduAgent - AI Powered Learning',
        desc: 'Unlock your potential with personalized AI learning assistants, smart quiz generators, and multilingual educational tools. A mission-driven project contributing to SDG 4: Quality Education.',
        tech: ['React', 'Generative AI', 'Node.js', 'Vercel'],
        features: ['AI Learning Assistant (24/7)', 'Smart Quiz Generator', 'Adaptive Difficulty', 'Multilingual Translation Tools', 'Gap-based Learning Analytics'],
        liveLink: 'https://ai-agent-frontened.vercel.app/'
      },
      {
        title: 'Hyperlocal Marketplace (Infotact)',
        desc: 'A full-stack marketplace platform developed during Infotact internship. Built using the MERN stack for seamless item discovery and localized transactions.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        features: ['REST API Implementation', 'CRUD Operations', 'Data Management', 'User Authentication', 'Git/GitHub Version Control'],
        githubLink: 'https://github.com/SunamGhosh/Hyperlocal.git'
      },
      {
        title: 'Global Excellence College (LMS)',
        desc: 'A comprehensive multi-university management platform handling core institutional operations. It streamlines everything from student management to faculty and staff coordination. Developed with Node.js and MySQL, using Ionic and Angular for a seamless multi-role experience (Student, Faculty, Staff, Admin).',
        tech: ['Node.js', 'MySQL', 'Ionic', 'Angular'],
        features: ['University Registration', 'Student & Faculty Management', 'Staff & Admin coordination', 'Online Application & Admission', 'Timetable & Attendance Module', 'WhatsApp Messaging Integration'],
        githubUi: 'https://github.com/SunamGhosh/admission-ui.git',
        githubApi: 'https://github.com/SunamGhosh/admission-api.git'
      }
    ]
  }

  const skills = [
    { name: 'NodeJS', level: 90 },
    { name: 'PHP', level: 95 },
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 92 },
    { name: 'ReactJs', level: 88 },
    { name: 'JavaScript', level: 95 },
    { name: 'Ionic / Angular', level: 85 },
    { name: 'HTML / CSS', level: 95 }
  ]

  const experience = [
    { company: 'GIIT Professional College', role: 'Full-Stack Web Developer', duration: 'June 2024 - Present', desc: 'Working as a passionate part-time web developer, architecting daily-need college modules and production-grade applications. Designed and deployed 10+ live modules serving the institution.' },
    { company: 'IBM Generative AI', role: 'Intern - Applied AI', duration: 'Dec 2025 - Jan 2026', desc: 'Working on AI-based solutions, model design, and ethical AI deployment through structured problem-solving and project-based tasks.' },
    { company: 'Cognifyz Technologies', role: 'Intern - Web Development', duration: 'Aug - Sept 2025', desc: 'Developed responsive web applications using React. Worked with APIs and backend integration to improve functionality using Agile workflows.' },
    { company: 'Infotact Solutions', role: 'Intern - MERN Stack', duration: 'June - Aug 2025', desc: 'Developed Hyperlocal Marketplace using MongoDB, Express, React, and Node.js. Implemented REST APIs and CRUD operations.' },
    { company: 'Deloitte', role: 'Technology Job Simulation', duration: 'May - June 2025', desc: 'Completed Deloitte\'s Technology Job Simulation, working on practical coding and development tasks aligned with real-world industry challenges.' }
  ]

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: 'calc(100% - 2rem)', margin: '1rem', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
          <div className="text-gradient" style={{ fontSize: '1.25rem', fontWeight: 800 }}>SG.DEV</div>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
            <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
            <a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', background: 'var(--accent-primary)', padding: '0.5rem 1rem', borderRadius: '0.5rem' }} className="hover-lift">Let's Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container reveal" style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', gap: '4rem', padding: '10rem 1.5rem 4rem' }}>
        <div className="hero-content" style={{ flex: 1 }}>
          <span className="glass-pill mb-4" style={{ display: 'inline-block' }}>Full-Stack Developer</span>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Hi, I'm <span className="text-gradient">Sunam Ghosh</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
            A passionate Developer & Educator specializing in architecting educational ecosystems and modern web solutions. Currently building the digital future at <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>GIIT Professional College</span>.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#projects" className="bg-gradient hover-lift" style={{ padding: '1rem 2rem', borderRadius: '0.75rem', fontWeight: 600, color: 'white', textDecoration: 'none' }}>Explore My Work</a>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Live Projects</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>2+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Full Portals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual" style={{ flex: 1, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <div className="glass" style={{ padding: '0.5rem', overflow: 'hidden', transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)', boxShadow: '40px 40px 60px rgba(0,0,0,0.5)', borderRadius: '2rem' }}>
              <img
                src={profile}
                alt="Sunam Ghosh"
                style={{ width: '100%', borderRadius: '1.5rem', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
            {/* Desktop Mockup Overlay */}
            {/* <div className="glass" style={{ position: 'absolute', bottom: '-20px', right: '-40px', padding: '0.5rem', width: '250px', transform: 'rotate(5deg)' }}>
              <img src="/hero_mockup.png" alt="Work Sample" style={{ width: '100%', borderRadius: '0.5rem' }} />
            </div> */}
          </div>
          {/* Accent Blobs */}
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: 0.15, zIndex: -1 }}></div>
          <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-secondary)', filter: 'blur(100px)', opacity: 0.1, zIndex: -1 }}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container reveal" style={{ background: 'var(--bg-secondary)', margin: '4rem auto', borderRadius: '3rem', padding: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About My <span className="text-gradient">Journey</span></h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Currently pursuing my BCA (2023-2026), I've merged academic excellence with real-world development. At GIIT, I've architected their entire LMS and Admin ecosystem, including key modules like Admissions, WhatsApp Integration, Fee Collection, and Faculty Management.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {skills.map(skill => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${skill.level}%`, background: 'var(--accent-primary)', borderRadius: '10px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="glass hover-lift" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>LMS Architect</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Led the design and development of GIIT's core student & faculty platforms, serving thousands of users.</p>
            </div>
            <div className="glass hover-lift" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Gen-AI Explorer</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Applying Generative AI at IBM to solve complex problems and design next-gen ethical AI workflows.</p>
            </div>
            <div className="glass hover-lift" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>IoT Innovator</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Created critical safety systems using Arduino & Raspberry Pi for accident prevention.</p>
            </div>
            <div className="glass hover-lift" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Technical Educator</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bridging the gap between code and logic by educating others on modern development stacks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Projects</span></h2>
          <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '1rem', gap: '1rem' }}>
            <button
              onClick={() => setActiveTab('giit')}
              style={{ padding: '0.75rem 1.5rem', borderRadius: '0.75rem', border: 'none', background: activeTab === 'giit' ? 'var(--accent-primary)' : 'transparent', color: 'white', fontWeight: 600, cursor: 'pointer', transition: 'var(--transition)' }}
            >GIIT Ecosystem</button>
            <button
              onClick={() => setActiveTab('other')}
              style={{ padding: '0.75rem 1.5rem', borderRadius: '0.75rem', border: 'none', background: activeTab === 'other' ? 'var(--accent-primary)' : 'transparent', color: 'white', fontWeight: 600, cursor: 'pointer', transition: 'var(--transition)' }}
            >Industry Projects</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {projects[activeTab].map((project, idx) => (
            <div key={idx} className="glass reveal hover-lift" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tech.map(t => <span key={t} style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', background: 'rgba(6,182,212,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{t}</span>)}
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem', flex: 1 }}>{project.desc}</p>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Core Highlights:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.features.map(f => (
                    <li key={f} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>→</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'var(--accent-primary)', border: 'none', color: 'white', padding: '0.9rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}
                    className="hover-lift"
                  >View Live Project</a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.8rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600, textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}
                    className="hover-lift"
                  >GitHub Repository</a>
                )}
                {project.githubUi && (
                  <a
                    href={project.githubUi}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.8rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600, textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}
                    className="hover-lift"
                  >GitHub UI Repo</a>
                )}
                {project.githubApi && (
                  <a
                    href={project.githubApi}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', padding: '0.8rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600, textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}
                    className="hover-lift"
                  >GitHub API Repo</a>
                )}
                {!project.liveLink && !project.githubLink && !project.githubUi && !project.githubApi && (
                  <button style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 600 }} className="hover-lift">Case Study Coming Soon</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internships Section */}
      <section id="experience" className="container reveal" style={{ background: 'var(--bg-secondary)', padding: '6rem', borderRadius: '3rem', margin: '4rem auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Professional <span className="text-gradient">Timeline</span></h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {experience.map((job, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderLeft: '2px solid var(--accent-primary)', position: 'relative' }} className="reveal">
              <div style={{ position: 'absolute', left: '-7px', top: '1.5rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
              <div style={{ minWidth: '200px' }}>
                <div style={{ fontWeight: 800, color: 'var(--accent-primary)' }}>{job.duration}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{job.company}</div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.role}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container" style={{ textAlign: 'center' }}>
        <div className="glass" style={{ padding: '6rem 2rem', background: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Have a <span className="text-gradient">Project</span> in Mind?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Looking for a developer who understands both code and user experience? Let's build something impactul together.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email Me</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>sunamghosh01@gmail.com</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Call Me</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>+91 9234919276</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Location</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>Jamshedpur, India</div>
            </div>
          </div>
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="https://www.linkedin.com/in/sunam-ghosh-333b11298" target="_blank" rel="noopener noreferrer" className="glass-pill hover-lift" style={{ textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://github.com/SunamGhosh" target="_blank" rel="noopener noreferrer" className="glass-pill hover-lift" style={{ textDecoration: 'none' }}>GitHub Profile</a>
            <a href="#" className="glass-pill hover-lift" style={{ textDecoration: 'none' }}>Download CV</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Sunam Ghosh. Built with passion using React & Modern CSS.
        </p>
      </footer>
    </div>
  )
}

export default Portfolio
