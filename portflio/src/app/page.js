'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="dark">
      {/* Navigation */}
      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <div className="nav-container">
          <div className="nav-brand">
            <h1>Sarath Chandra Patruni</h1>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="nav-links">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#achievements" 
              className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Achievements
            </a>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Education
            </a>
            <a 
              href="#certifications" 
              className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Aspiring AI/ML Engineer | Python | SQL | Data Science Enthusiast</h2>
          <p>
            Passionate about leveraging artificial intelligence and machine learning to solve complex problems.
            Strong foundation in algorithms and data structures with hands-on experience in various ML projects.
          </p>
          <a href="#contact" className="btn">Let's Connect</a>
          &nbsp; &nbsp; &nbsp;
          <a href="#contact" className="btn">Resume</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p>
              I am a dedicated AI/ML engineer with a strong passion for machine learning and data science.
              My expertise lies in developing efficient algorithms and implementing machine learning solutions
              using Python and SQL. I enjoy working with tools like Power BI and Jupyter Notebook for data
              analysis and visualization.
            </p>
            <div className="mt-8">
              <h3>Interests</h3>
              <div className="project-tags">
                <span className="tag">AI</span>
                <span className="tag">Optimization Techniques</span>
                <span className="tag">Competitive Coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-4">
            <div className="card">
              <h3>Languages</h3>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Python</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>C++</span>
              </div>
            </div>

            <div className="card">
              <h3>Core Competencies</h3>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>DSA</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Algorithms</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Problem Solving</span>
              </div>
            </div>

            <div className="card">
              <h3>Tools & Tech</h3>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Power BI</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Git</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>VS Code</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Jupyter</span>
              </div>
            </div>

            <div className="card">
              <h3>Libraries & Frameworks</h3>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>NumPy</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Pandas</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Scikit-learn</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Seaborn</span>
              </div>
              <div className="skill-item">
                <span className="skill-dot"></span>
                <span>Matplotlib</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="grid grid-3">
            <div className="card">
              <SiLeetcode className="social-icon" />
              <h3>LeetCode</h3>
              <p className="text-2xl">250+</p>
              <p>Problems Solved</p>
            </div>

            <div className="card">
              <SiGeeksforgeeks className="social-icon" />
              <h3>GeeksforGeeks</h3>
              <p className="text-2xl">300+</p>
              <p>Problems Solved</p>
            </div>

            <div className="card">
              <SiHackerrank className="social-icon" />
              <h3>HackerRank</h3>
              <p className="text-2xl">4-Star</p>
              <p>SQL Badge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-3">
            <div className="project-card">
              <div className="project-content">
                <h3>Diabetes Prediction</h3>
                <p>
                  Implemented Naive Bayes algorithm for diabetes prediction with high accuracy.
                </p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Scikit-learn</span>
                  <span className="tag">Pandas</span>
                </div>
                <a
                  href="https://github.com/sarath123-max"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" /> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>Stock Price Prediction</h3>
                <p>
                  Developed a Random Forest model for stock price prediction with historical data analysis.
                </p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Random Forest</span>
                  <span className="tag">Pandas</span>
                </div>
                <a
                  href="https://github.com/sarath123-max"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" /> View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>Credit Card Fraud Detection</h3>
                <p>
                  Built a fraud detection system using SMOTE and Random Forest for handling imbalanced data.
                </p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">SMOTE</span>
                  <span className="tag">Random Forest</span>
                </div>
                <a
                  href="https://github.com/sarath123-max"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Aditya College of Engineering</h3>
              <p>B.Tech in AIML (2023–2027)</p>
              <p>GPA: 7.88</p>
            </div>

            <div className="card">
              <h3>Sri Chaitanya Jr College</h3>
              <p>MPC (2021–2023)</p>
              <p>Percentage: 89%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
            {/* Certifications Section */}
            <section id="certifications" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Data Science with Python</h3>
              <p>Issued by: IBM</p>
              <p>Credential ID: IBM123XYZ</p>
            </div>
            <div className="card">
              <h3>SQL for Data Science</h3>
              <p>Issued by: Coursera</p>
              <p>Credential ID: SQL456ABC</p>
            </div>
            <div className="card">
              <h3>Machine Learning</h3>
              <p>Issued by: Stanford Online (Coursera)</p>
              <p>Credential ID: ML789DEF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="animate-fade-in">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="card contact-card">
            <p><FaEnvelope className="inline-icon" /> sarath.email@example.com</p>
            <p><FaPhone className="inline-icon" /> +91 98765 43210</p>
            <div className="social-icons">
              <a href="https://github.com/sarath123-max" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/sarath-linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sarath Chandra Patruni. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
