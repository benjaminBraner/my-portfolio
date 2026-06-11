import { useState, useEffect } from 'react'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

export default function Navbar() {
  const navbarRef = useNavbarScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className={`navbar navbar--shadow`} ref={navbarRef}>
      <div className="navbar__container">
        <div
          className={`navbar__toggle${menuOpen ? ' is-active' : ''}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu${menuOpen ? ' active' : ''}`}>
          <li className="navbar__left-container">
            <a href="#home" className="navbar__links btn-white-nav" onClick={closeMenu}>Home</a>
            <a href="#about" className="navbar__links" onClick={closeMenu}>About</a>
            <a href="#stack" className="navbar__links" onClick={closeMenu}>Stack</a>
          </li>
          <li className="navbar__right-container">
            <a href="#projects" className="navbar__links" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="navbar__links" onClick={closeMenu}>Contact</a>
            <a href="/cv.html" className="navbar__links btn-black-nav" target="_blank" rel="noreferrer" onClick={closeMenu}>CV</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
