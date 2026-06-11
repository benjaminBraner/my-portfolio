import { useEffect, useRef } from 'react'

export function useNavbarScroll() {
  const navbarRef = useRef(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const navbar = navbarRef.current
      if (!navbar) return

      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        navbar.classList.add('navbar--hidden')
      } else {
        navbar.classList.remove('navbar--hidden')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return navbarRef
}
