import { useTextReveal } from '../hooks/useTextReveal'

export default function About() {
  const spanRef = useTextReveal()

  return (
    <section className="about" id="about">
      <p className="about__details">
        <span ref={spanRef}>
          {' '}I am a frontend developer passionate about technology with 2+ years of React experience, including freelance work .I thrive on learning, tackling challenges, and contributing to high-performing teams.{' '}
        </span>
      </p>
    </section>
  )
}
