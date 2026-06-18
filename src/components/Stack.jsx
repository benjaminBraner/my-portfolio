import { useState } from 'react'
import CertModal from './CertModal'

const currentYear = new Date().getFullYear()

const technologies = [
  {
    icon: '/assets/icons/html.svg',
    title: 'HTML',
    subtitle: 'The Web Core',
    dates: `2019 - ${currentYear}`,
    desc: 'The backbone of the web. I craft clean, semantic, and accessible markup to build structured and SEO-friendly websites.',
    cert: false,
  },
  {
    icon: '/assets/icons/css.svg',
    title: 'CSS',
    subtitle: 'Style & Beauty',
    dates: `2019 - ${currentYear}`,
    desc: 'Bringing designs to life with responsive, modern, and pixel-perfect styling. I specialize in frameworks like Tailwind CSS for efficiency and scalability.',
    cert: false,
  },
  {
    icon: '/assets/icons/js.svg',
    title: 'JavaScript',
    subtitle: 'Interactivity',
    dates: `2020 - ${currentYear}`,
    desc: 'The engine behind interactivity. I write clean, optimized, and modular JavaScript to create smooth and dynamic user experiences.',
    cert: false,
  },
  {
    icon: '/assets/icons/react.svg',
    title: 'React.js',
    subtitle: 'Scalable Interfaces',
    dates: `2021 - ${currentYear}`,
    desc: 'My go-to library for building fast, scalable, and high-performing web applications. I focus on reusable components, hooks, and clean state management for maintainable frontend architecture.',
    cert: true,
  },
  {
    icon: '/assets/icons/node.svg',
    title: 'Node.js',
    subtitle: 'Backend Power',
    dates: `2024 - ${currentYear}`,
    desc: 'Building efficient, scalable server-side applications with JavaScript. I use Node.js for REST APIs, real-time systems, and full-stack projects with Express.js.',
    cert: false,
  },
  {
    icon: '/assets/icons/git.svg',
    title: 'Git & GitHub',
    subtitle: 'Control & Collaboration',
    dates: `2020 - ${currentYear}`,
    desc: 'Version control is key. I use Git to manage code efficiently and GitHub for collaboration, CI/CD workflows, and open-source contributions.',
    cert: false,
  },
]

export default function Stack() {
  const [certOpen, setCertOpen] = useState(false)

  return (
    <section className="stack" id="stack">
      <h3>My Stack of Technologies I've used</h3>

      {technologies.map((tech) => (
        <div className="technology-container" key={tech.title}>
          <div className="tec-img-container">
            <img src={tech.icon} alt={tech.title} />
          </div>
          <p className="tech-title">{tech.title}</p>
          <h4>
            {tech.subtitle}
            {tech.cert && (
              <span
                className="cert-btn"
                id="react-cert-btn"
                onClick={() => setCertOpen(true)}
              >
                Certificate
              </span>
            )}
          </h4>
          <p className="tech-date">{tech.dates}</p>
          <p className="tech-desc">{tech.desc}</p>
        </div>
      ))}

      <CertModal isOpen={certOpen} onClose={() => setCertOpen(false)} />
    </section>
  )
}
