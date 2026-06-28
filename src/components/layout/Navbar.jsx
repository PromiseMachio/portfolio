import React, { useState, useEffect } from 'react'
import { Code, Menu, Section, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // state hook for toggle opening mobile Menu
  const [isScrolled, setIsScrolled] = useState(false) // state hook for enabling user to scroll to section
  const activateSection = useScrollSpy(NAV_LINKS.map(link => link.id)); // Checks the active section related ID with the nav-link id. under a code snippet useScrollSpy

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 50)
    };
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []); // useEffect is a key function which applies DOM effect to handle the scrolling effect on windows page.  setIsScrolled(window.screenY>50) this shows the scroll is vertical as long as it is greater than 50px

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId); // Enables the scrolling to a selected section depending to the nav-link ID
    setIsMenuOpen(false)// In mobile we dont expect this to remain open after selecting a nav option 
  }
  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 w-full bg-transparent sm:bg-none md:bg-none py-4 transition-all duration-300 ${isScrolled
      ? 'bg-transparent sm:bg-none' 
      : 'backdrop-blur-lg sm:bg-none'}`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      {/* backdrop-blur-lg */}
      <div className='max-w-330 mx-auto px-5'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='flex items-center gap-4'>
            <Code className='w-6 h-6 text-primary' />

            <button
              onClick={()=>scrollToSection('hero')}
              // onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })}
              className='text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
              aria-label='home'
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>

          </div>
          {/* desktop navigation */}
          <nav className='hidden  md:flex items-center gap-7'>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${activateSection === link.id
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'}`}
              >
                {link.label}
              </button>
            ))}

          </nav>
          {/* hire me button */}
          <div className='hidden md:flex items-center gap-2'>
            <button
              onClick={() => handleNavClick('contact')}
              className='px-7 py-3.5 bg-white text-primary font-medium rounded-2xl border-white hover:bg-white/90 transition-all duration-300'
            >
              Hire Me
            </button>
          </div>

          {/* mobile menu toggle */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-4 text-white hover:text-white/80 transition-all'
            aria-label='menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-none ${isMenuOpen
        ? 'max-h-96 opacity-100'
        : 'max-h-0 opacity-0'}`}>
          <div className='bg-blue/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3'>
            {NAV_LINKS.map((link)=>[
              <button
              key={link.id}
              onClick={()=> handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activateSection === link.id
                ? 'text-white bg-white/10'
                : 'text-white/70 hover:text-white hover:bg-white/50 '
              }`}
              >
                {link.label}
              </button>
            ])}
            <button
            onClick={()=>handleNavClick('contacts')}
            className='w-full px-7 py-3.5 bg-white text-primary font-medium text-base rounded-2xl border-white hover:bg-white/90 transition-all duration-300 mt-2'
            >
              Hire Me
            </button>

          </div>

      </div>

    </nav>
  )
}

export default Navbar