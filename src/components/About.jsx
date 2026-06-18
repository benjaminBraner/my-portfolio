import { useTextReveal } from '../hooks/useTextReveal'

export default function About() {
  const { ref, progress } = useTextReveal()
  const text = 'I am a frontend developer passionate about technology with 2+ years of React experience, including freelance work. I thrive on learning, tackling challenges, and contributing to high-performing teams.'
  const words = text.split(' ')

  return (
    <section className="about" id="about">
      <p className="about__details" ref={ref}>
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          let opacity = (progress - start) / (end - start)
          opacity = Math.max(0.2, Math.min(1, opacity))
          
          return (
            <span key={i} style={{ opacity, transition: 'opacity 0.1s ease-out' }}>
              {word}{' '}
            </span>
          )
        })}
      </p>
    </section>
  )
}
