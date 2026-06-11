import { useEffect, useRef } from 'react'

export function useBgColor() {
  const titleContainerRef = useRef(null)

  useEffect(() => {
    const updateBackgroundColor = () => {
      const titleContainer = titleContainerRef.current
      if (!titleContainer) return

      const rect = titleContainer.getBoundingClientRect()
      const screenHeight = window.innerHeight

      if (rect.top < screenHeight / 2) {
        document.body.style.backgroundColor = 'black'
      } else {
        document.body.style.backgroundColor = 'white'
      }
    }

    window.addEventListener('scroll', updateBackgroundColor)
    window.addEventListener('resize', updateBackgroundColor)
    updateBackgroundColor()

    return () => {
      window.removeEventListener('scroll', updateBackgroundColor)
      window.removeEventListener('resize', updateBackgroundColor)
    }
  }, [])

  return titleContainerRef
}
