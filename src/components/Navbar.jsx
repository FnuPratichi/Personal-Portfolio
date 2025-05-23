import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
      { id: 'about', label: 'About' },
      { id: 'journey', label: 'Journey' },
      { id: 'projects', label: 'Projects' },
      { id: 'blogs', label: 'Blogs' }, 
      { id: 'recommendation-letter', label: 'Recommendation Letter' }, 
      { id: 'publications', label: 'Publications' }, 
      { id: 'certifications', label: 'Certifications' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
    ];
    

  // Adjust offset to your navbar height (80px here)
  const scrollOffset = -80;

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-black text-white py-4 px-8 shadow-lg z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <h1
          tabIndex={0}
          className="text-2xl font-semibold text-yellow-400 cursor-pointer hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onKeyDown={(e) => { if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Scroll to top"
        >
          Fnu Pratichi
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg" role="menubar" aria-label="Primary navigation">
          {navItems.map(({ id, label }) => (
            <li key={id} role="none">
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={scrollOffset}
                activeClass="text-yellow-400"
                className="cursor-pointer hover:text-yellow-400 transition"
                tabIndex={0}
                role="menuitem"
                aria-label={`Scroll to ${label}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          >
            {isOpen ? <X className="text-yellow-400" size={24} /> : <Menu className="text-yellow-400" size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden mt-4 flex flex-col space-y-4 text-lg"
          role="menu"
          aria-label="Mobile primary navigation"
        >
          {navItems.map(({ id, label }) => (
            <li key={id} role="none">
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={scrollOffset}
                activeClass="text-yellow-400"
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer hover:text-yellow-400 transition"
                tabIndex={0}
                role="menuitem"
                aria-label={`Scroll to ${label}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
