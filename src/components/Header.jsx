import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuAberto &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setMenuAberto(false);
      }
    };

    const handleScroll = () => {
      if (menuAberto) {
        setMenuAberto(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuAberto]);

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Schmitt Safe Services Logo" />
        </div>

        <nav ref={menuRef} className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
          <a href="#about" onClick={() => setMenuAberto(false)}>Sobre</a>
          <a href="#services" onClick={() => setMenuAberto(false)}>Serviços</a>
          <a href="#contact" onClick={() => setMenuAberto(false)}>Contato</a>
        </nav>

        <div ref={iconRef} className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
