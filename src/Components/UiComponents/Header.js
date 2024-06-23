import React, {useRef} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Styles/Header.css';
import Logo from '../Assets/logo.png'

const Header = () => {
    const navRef = useRef();
    const location = useLocation();

    const showNav = () => {
        navRef.current.classList.toggle("open")
    };

    const closeNav = () => {
        navRef.current.classList.remove("open")
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if(section) {
            section.scrollIntoView();
            closeNav();
        }
    }

  return (
    <header className='header' id='header'>
        <div className='header__container'>
            <div className='header__logo-wrapper'>
                <img src={Logo} className='header__logo-img'/>
                <p className='header__logo-text'>Kamp BJ Aquatics</p>
            </div>
            <div className='header__controls-wrapper'>
                <nav className='header__nav-links' ref={navRef}>
                    <i className="header__x-icon fa-solid fa-xmark" onClick={closeNav}></i>
                    {location.pathname === '/' ? (
                        <>
                            <a href='/' className='header__link' onClick={closeNav}>Home</a>
                            <a onClick={() => scrollToSection('about')} className='header__link'>About</a>
                            <a onClick={() => scrollToSection('products')} className='header__link'>Products</a>
                            <a onClick={() => scrollToSection('pets')} className='header__link'>Pets</a>     
                            <a onClick={() => scrollToSection('location')} className='header__link'>Location</a>     
                            <a onClick={() => scrollToSection('contacts')} className='header__link'>Contacts</a>
                        </>
                    ) : (
                        <>
                            <NavLink to='/' className='header__link' onClick={closeNav}>Home</NavLink>
                            <NavLink to='/' className='header__link' onClick={closeNav}>About</NavLink>
                            <NavLink to='/' className='header__link' onClick={closeNav}>Products</NavLink>
                            <NavLink to='/' className='header__link' onClick={closeNav}>Pets</NavLink>     
                            <NavLink to='/' className='header__link' onClick={closeNav}>Location</NavLink>     
                            <NavLink to='/' className='header__link' onClick={closeNav}>Contacts</NavLink>
                        </>
                    )}
                </nav>
                <i className="header__hamburger-icon fa-solid fa-bars" onClick={showNav}></i>
            </div>
        </div>
    </header>
  )
}

export default Header
