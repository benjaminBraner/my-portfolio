import { useEffect, useRef } from 'react'

export function useTextReveal() {
  const spanRef = useRef(null)

  useEffect(() => {
    const revealTextOnScroll = () => {
      const textSpan = spanRef.current
      if (!textSpan) return

      const rect = textSpan.getBoundingClientRect()
      const windowHeight = window.innerHeight

      let progress = (windowHeight - rect.top) / (windowHeight * 0.8)
      progress = Math.min(1, Math.max(0, progress))

      textSpan.style.backgroundSize = `${progress * 100}% 100%`
    }

    window.addEventListener('scroll', revealTextOnScroll)
    window.addEventListener('load', revealTextOnScroll)
    revealTextOnScroll()

    return () => {
      window.removeEventListener('scroll', revealTextOnScroll)
      window.removeEventListener('load', revealTextOnScroll)
    }
  }, [])

  return spanRef
}
