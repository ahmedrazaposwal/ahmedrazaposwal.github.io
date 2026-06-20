import { motion } from 'motion/react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import {
  ArrowDown,
  Mail,
  Server,
  Database,
  CloudCog,
  Code2,
  TestTube2,
  Wrench,
  ArrowUpRight,
  Boxes,
  Sprout,
  Bot,
  GraduationCap,
  Award,
  Languages,
  Send,
  Download,
  MapPin,
} from 'lucide-react'
import profilePhoto from './assets/ahmed.JPG'
import './App.css'

const skillGroups = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Microservices',
      'REST APIs',
      'JPA / Hibernate',
      'JWT',
      'OAuth2',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudCog,
    skills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'GitHub Actions',
      'CI/CD',
      'Linux',
    ],
  },
  {
    title: 'Languages & Frontend',
    icon: Code2,
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: 'Testing',
    icon: TestTube2,
    skills: ['JUnit 5', 'TDD', 'Unit Testing', 'Integration Testing'],
  },
  {
    title: 'Tools & Methods',
    icon: Wrench,
    skills: ['Git', 'Kafka', 'Jira', 'Maven', 'Gradle', 'Agile', 'Scrum'],
  },
]

const experiences = [
  {
    period: 'Sep 2022 — Apr 2026',
    company: 'Fraunhofer Gesellschaft',
    role: 'Software Developer',
    location: 'Kaiserslautern, Germany',
    achievements: [
      'Designed and maintained Spring Boot microservices and REST APIs for research and industrial analytics applications.',
      'Optimized PostgreSQL queries and backend services, reducing API response times by 25%.',
      'Implemented CI/CD pipelines using GitHub Actions and Docker.',
      'Applied test-driven development with JUnit 5, increasing test coverage to more than 80%.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
      'JUnit 5',
    ],
  },
  {
    period: 'Nov 2024 — Sep 2025',
    company: 'RRLAB, TU Kaiserslautern',
    role: 'Master Thesis Researcher',
    location: 'Kaiserslautern, Germany',
    achievements: [
      'Developed a C++ framework for natural-language control of autonomous off-road robots.',
      'Integrated large language models, RAG, and computer vision into a unified AI control pipeline.',
      'Tested the system across more than 25 scenarios and validated it on physical robotic hardware.',
    ],
    technologies: [
      'C++',
      'Python',
      'LLMs',
      'RAG',
      'Computer Vision',
      'NVIDIA Jetson',
    ],
  },
  {
    period: 'Aug 2019 — Jan 2020',
    company: 'Codecture',
    role: 'Android Application Developer',
    location: 'Pakistan',
    achievements: [
      'Developed Android applications in Java, including interface implementation and application logic.',
      'Integrated REST APIs and JSON communication for reliable real-time data synchronization.',
      'Worked in an agile Scrum team with regular bi-weekly release cycles.',
    ],
    technologies: [
      'Java',
      'Android',
      'REST APIs',
      'MySQL',
      'JSON',
      'Material Design',
    ],
  },
]

const projects = [
  {
    title: 'ERP Management System',
    category: 'Backend Application',
    description:
      'A secure Spring Boot ERP platform featuring JWT authentication, role-based access control, inventory management, pagination, filtering, and soft deletion.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'JWT',
      'JPA',
    ],
    icon: Boxes,
    theme: 'erp-theme',
  },
  {
    title: 'Smart Gardening System',
    category: 'IoT & Mobile Application',
    description:
      'An Android application for monitoring and controlling irrigation through real-time sensor data, Firebase communication, and automated watering schedules.',
    technologies: [
      'Java',
      'Android',
      'Arduino',
      'C++',
      'Firebase',
      'IoT',
    ],
    icon: Sprout,
    theme: 'garden-theme',
  },
  {
    title: 'Autonomous Robot Control',
    category: 'Artificial Intelligence',
    description:
      'A natural-language control framework combining large language models, retrieval-augmented generation, and computer vision for autonomous off-road robots.',
    technologies: [
      'C++',
      'Python',
      'LLMs',
      'RAG',
      'Computer Vision',
      'NVIDIA Jetson',
    ],
    icon: Bot,
    theme: 'robot-theme',
  },
]

const education = [
  {
    degree: 'Master of Science in Informatics',
    university: 'Technische Universität Kaiserslautern',
    period: 'Apr 2022 — May 2026',
    location: 'Kaiserslautern, Germany',
    details:
      'Specialized in Software Engineering, Artificial Intelligence, and Machine Learning.',
    thesis:
      'Natural-Language Control of Autonomous Vehicles using LLMs, RAG, and Computer Vision.',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    university: 'COMSATS University Islamabad',
    period: 'Mar 2016 — Mar 2020',
    location: 'Pakistan',
    details:
      'Focused on object-oriented programming, database systems, software architecture, and software engineering.',
  },
]

function App() {
  return (
    <main>
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <header className="navbar">
        <a className="logo" href="#home" aria-label="Ahmed Raza home">
          AR<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="mailto:ahmedrazaposwal@gmail.com">
          Let&apos;s talk
        </a>
      </header>

      <section className="hero-section" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="availability"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="availability-dot" />
            Available for opportunities in Germany
          </motion.div>

          <p className="hero-introduction">Hello, I&apos;m Ahmed Raza</p>

          <h1>
            I build reliable
            <span> backend systems.</span>
          </h1>

          <p className="hero-description">
            Software Engineer with 3+ years of experience building scalable
            applications with Java, Spring Boot, PostgreSQL, and cloud-native
            technologies.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View my work
              <ArrowDown size={18} />
            </a>

            <a className="secondary-button" href="#contact">
              Contact me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/ahmedrazaposwal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/ahmedraza-159071132"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a href="mailto:ahmedrazaposwal@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>

        <motion.a
          className="scroll-indicator"
          href="#about"
          aria-label="Scroll to About section"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span>Scroll</span>
          <ArrowDown size={18} />
        </motion.a>
      </section>

      <section className="about-section" id="about">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-image-frame">
            <img
              src={profilePhoto}
              alt="Ahmed Raza, Software Engineer"
              className="about-image"
            />
          </div>

          <div className="image-decoration" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">01 — About me</p>

          <h2>
            Engineering dependable software with
            <span> purpose and precision.</span>
          </h2>

          <p>
            I&apos;m a Software Engineer based in Kaiserslautern, Germany, with more
            than three years of experience in backend and cloud-native development.
            I enjoy transforming complex requirements into scalable, maintainable
            systems.
          </p>

          <p>
            At Fraunhofer Gesellschaft, I developed Spring Boot microservices,
            optimized PostgreSQL queries, and built CI/CD pipelines. My interests
            also extend into artificial intelligence, autonomous robotics, and
            data-driven applications.
          </p>

          <div className="about-stats">
            <div>
              <strong>3+</strong>
              <span>Years of experience</span>
            </div>

            <div>
              <strong>25%</strong>
              <span>Faster API responses</span>
            </div>

            <div>
              <strong>80%+</strong>
              <span>Test coverage</span>
            </div>
          </div>
        </motion.div>
      </section>


      <section className="skills-section" id="skills">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">02 — Technical skills</p>

          <h2>
            Technologies I use to turn ideas into
            <span> working software.</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>



      <section className="experience-section" id="experience">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03 — Experience</p>

          <h2>
            Building software across research,
            <span> industry and innovation.</span>
          </h2>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="experience-meta">
                <span className="experience-period">{experience.period}</span>
                <span className="experience-location">{experience.location}</span>
              </div>

              <div className="experience-details">
                <span className="experience-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>

                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">04 — Featured projects</p>

          <h2>
            Selected work combining software,
            <span> data and intelligent systems.</span>
          </h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className={`project-visual ${project.theme}`}>
                  <span className="project-visual-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <motion.div
                    className="project-icon-large"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                  >
                    <Icon size={72} strokeWidth={1.2} />
                  </motion.div>

                  <div className="project-orbit project-orbit-one" />
                  <div className="project-orbit project-orbit-two" />
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href="https://github.com/ahmedrazaposwal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore my GitHub
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>


      <section className="education-section" id="education">
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">05 — Education</p>

          <h2>
            Academic foundations shaped by
            <span> curiosity and research.</span>
          </h2>
        </motion.div>

        <div className="education-layout">
          <div className="education-list">
            {education.map((item, index) => (
              <motion.article
                className="education-card"
                key={item.degree}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>

                <div className="education-content">
                  <div className="education-period">{item.period}</div>

                  <h3>{item.degree}</h3>
                  <h4>{item.university}</h4>

                  <p className="education-location">{item.location}</p>
                  <p>{item.details}</p>

                  {item.thesis && (
                    <div className="thesis">
                      <span>Master thesis</span>
                      <p>{item.thesis}</p>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="credentials-panel"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="credential-block">
              <div className="credential-title">
                <Award size={22} />
                <h3>Certification</h3>
              </div>

              <div className="certificate">
                <span>May 2026</span>
                <strong>AWS Cloud Practitioner Essentials</strong>
                <p>Amazon Web Services</p>
              </div>
            </div>

            <div className="credential-divider" />

            <div className="credential-block">
              <div className="credential-title">
                <Languages size={22} />
                <h3>Languages</h3>
              </div>

              <div className="language">
                <div>
                  <strong>English</strong>
                  <span>Proficient</span>
                </div>
                <div className="language-level english-level" />
              </div>

              <div className="language">
                <div>
                  <strong>German</strong>
                  <span>B1 Intermediate</span>
                </div>
                <div className="language-level german-level" />
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">06 — Contact</p>

          <h2>
            Have an interesting opportunity?
            <span> Let&apos;s talk.</span>
          </h2>

          <p className="contact-description">
            I&apos;m currently open to Backend Engineer, Java Developer, and Software
            Engineer opportunities in Germany. Feel free to reach out for a role,
            collaboration, or conversation.
          </p>

          <div className="contact-actions">
            <a
              className="primary-button"
              href="mailto:ahmedrazaposwal@gmail.com"
            >
              Send me an email
              <Send size={18} />
            </a>

            <a
              className="secondary-button"
              href="/Ahmed-Raza-CV.pdf"
              download="Ahmed-Raza-CV.pdf"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div className="contact-details">
            <a href="mailto:ahmedrazaposwal@gmail.com">
              <Mail size={20} />

              <div>
                <span>Email</span>
                <strong>ahmedrazaposwal@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/ahmedraza-159071132"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} />

              <div>
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </div>
            </a>

            <div className="contact-location">
              <MapPin size={20} />

              <div>
                <span>Location</span>
                <strong>Kaiserslautern, Germany</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <a className="logo" href="#home" aria-label="Return to the top">
          AR<span>.</span>
        </a>

        <p>Designed and built by Ahmed Raza</p>

        <p>© {new Date().getFullYear()}</p>
      </footer>

    </main>
  )
}

export default App