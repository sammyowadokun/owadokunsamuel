import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '20px 20px',
      zIndex: 1000,
      borderBottom: '1px solid #ddd',
      color: '#000000',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '400' }}><Link to="/">Samuel Owadokun</Link></h3>
        {/* Desktop Nav */}
        <ul className="nav-desktop" style={{ display: 'flex', listStyle: 'none', gap: '20px', fontSize: '0.8rem' }}>
          <li><Link to="/skills" className='list'>Skills</Link></li>
          <li><Link to="/about" className='list'>About Me</Link></li>
          <li><Link to="/projects" className='list'>Projects</Link></li>
          <li><Link to="/contact" className="btn2">CONTACT ME</Link></li>
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="nav-hamburger"
          aria-label="Toggle navigation menu"
          onClick={handleMenuToggle}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginLeft: '16px',
            zIndex: 1100,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2.5" rx="1.25" fill="#222" />
            <rect y="10.75" width="24" height="2.5" rx="1.25" fill="#222" />
            <rect y="17.5" width="24" height="2.5" rx="1.25" fill="#222" />
          </svg>
        </button>
        {/* Sliding Side Menu for mobile */}
        <div className={`nav-side-overlay${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle} style={{
          display: menuOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 1199,
        }} />
        <div
          className={`nav-side-menu${menuOpen ? ' open' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: '220px',
            background: '#fff',
            boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
            borderLeft: '1px solid #eee',
            zIndex: 1200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '60px 0 0 0',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.35s cubic-bezier(.77,0,.18,1)',
          }}
        >
          <Link to="/skills" className='list' style={{ padding: '16px 32px', width: '100%' }} onClick={handleLinkClick}>Skills</Link>
          <Link to="/about" className='list' style={{ padding: '16px 32px', width: '100%' }} onClick={handleLinkClick}>About Me</Link>
          <Link to="/projects" className='list' style={{ padding: '16px 32px', width: '100%' }} onClick={handleLinkClick}>Projects</Link>
          <Link to="/contact" className="btn2" style={{ padding: '16px 32px', width: '100%' }} onClick={handleLinkClick}>CONTACT ME</Link>
        </div>
      </div>
    </nav>
  );

};

export default Nav;