import { useEffect, useRef } from 'react'

export default function Hero() {
  const imgRef = useRef(null)
  const profileHeaderRef = useRef(null)
  const mainContentRef = useRef(null)

  useEffect(() => {
    const relocateImage = () => {
      const img = imgRef.current
      const profileHeader = profileHeaderRef.current
      const mainContent = mainContentRef.current
      if (!img || !profileHeader || !mainContent) return

      if (window.innerWidth <= 768) {
        if (profileHeader.contains(img)) {
          mainContent.insertBefore(img, profileHeader)
        }
      } else {
        if (!profileHeader.contains(img)) {
          // put it back at index 1 (between the two spans)
          profileHeader.insertBefore(img, profileHeader.children[1] || null)
        }
      }
    }

    window.addEventListener('resize', relocateImage)
    relocateImage()

    return () => window.removeEventListener('resize', relocateImage)
  }, [])

  return (
    <section className="main" id="home">
      <div className="main__content" ref={mainContentRef}>
        <h1 className="profile-header" ref={profileHeaderRef}>
          <span>Hey, I'm</span>
          <img ref={imgRef} src="/assets/icons/react.svg" alt="Profile" />
          <span> Benjamin</span>
        </h1>
        <h1 className="subtitle">React developer crafting<br />modern web experiences</h1>
      </div>
    </section>
  )
}
