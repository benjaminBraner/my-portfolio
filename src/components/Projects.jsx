import { useBgColor } from '../hooks/useBgColor'

const projects = [
  { img: '/assets/images/proyecto-doblerapp.jpg',    alt: 'Project 1', url: 'https://dobler.netlify.app/',        className: 'item item1' },
  { img: '/assets/images/proyecto-gymshark.jpg',     alt: 'Project 2', url: 'https://gymshark-app.netlify.app/', className: 'item item2' },
  { img: '/assets/images/proyecto-servforu.png',     alt: 'Project 3', url: 'https://servforu.netlify.app',       className: 'item item3' },
  { img: '/assets/images/proyecto-journal.png',      alt: 'Project 4', url: 'https://journal-benjamin.netlify.app', className: 'item item4' },
  { img: '/assets/images/todo-mockup.png',           alt: 'Project 5', url: 'https://todoit-app.netlify.app/',    className: 'item item5' },
  { img: '/assets/images/proyecto-plantsapp.png',    alt: 'Project 6', url: 'https://your-tree.netlify.app/',     className: 'item item6' },
]

export default function Projects() {
  const titleContainerRef = useBgColor()

  const handleImageClick = (url) => {
    if (url) window.open(url, '_blank')
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__title-container" ref={titleContainerRef}>
        <h3>What you can expect</h3>
        <h3>from me</h3>
      </div>
      <div className="wrapper">
        {projects.map((project) => (
          <div className={project.className} key={project.alt}>
            <img
              src={project.img}
              alt={project.alt}
              className="item-image"
              onClick={() => handleImageClick(project.url)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
