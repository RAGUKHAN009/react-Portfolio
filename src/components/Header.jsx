import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#home', icon: 'bx bx-home-alt' },
  { href: '#about', icon: 'bx bx-user' },
  { href: '#skills', icon: 'bx bx-book' },
  { href: '#work', icon: 'bx bx-briefcase-alt-2' },
  { href: '#contact', icon: 'bx bx-message-square-detail' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLightTheme, setIsLightTheme] = useState(false)

  // Change background header on scroll
  useEffect(() => {
    const scrollHeader = () => setScrolled(window.scrollY >= 50)
    window.addEventListener('scroll', scrollHeader)
    return () => window.removeEventListener('scroll', scrollHeader)
  }, [])

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'work', 'contact']

    const scrollActive = () => {
      const scrollY = window.pageYOffset

      sectionIds.forEach((id) => {
        const current = document.getElementById(id)
        if (!current) return

        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', scrollActive)
    return () => window.removeEventListener('scroll', scrollActive)
  }, [])

  // Light / dark theme, persisted to localStorage
  useEffect(() => {
    const selectedTheme = localStorage.getItem('selected-theme')
    if (selectedTheme === 'dark') {
      setIsLightTheme(true)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-theme', isLightTheme)
  }, [isLightTheme])

  const toggleTheme = () => {
    setIsLightTheme((prev) => {
      const next = !prev
      localStorage.setItem('selected-theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <header className={`header ${scrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Aliyan Arif</a>

        <div className="nav__menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__items" key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link ${activeSection === link.href.slice(1) ? 'active-link' : ''}`}
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <i
          className={`bx change-theme ${isLightTheme ? 'bx-sun' : 'bx-moon'}`}
          id="theme-button"
          onClick={toggleTheme}
        ></i>
      </nav>
    </header>
  )
}

export default Header
