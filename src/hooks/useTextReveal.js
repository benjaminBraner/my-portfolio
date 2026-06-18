import { useEffect, useRef, useState } from 'react'

export function useTextReveal() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Start revealing when the element's top is 80% down the screen
      const start = windowHeight * 0.8
      // Finish revealing when the element's top reaches 30% down the screen
      const end = windowHeight * 0.3

      let currentProgress = (start - rect.top) / (start - end)
      currentProgress = Math.min(1, Math.max(0, currentProgress))

      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    window.addEventListener('load', handleScroll)
    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('load', handleScroll)
    }
  }, [])

  return { ref, progress }
}
