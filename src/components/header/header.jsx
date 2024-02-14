import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './header.scss';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 80;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'header-scrolled header-fixed' : ''}`}>
            <nav className='header-nav'>
                <div className="header-first-bloc">
                    <NavLink to="/">
                        <button aria-label='navigate to homepage' className="nav-logo-btn">
                            <p className="nav-logo-text"><span className="nav-logo-span">K</span>ZKO</p>
                            <hr className="nav-logo-hr" />
                            <p className="nav-logo-scnd-text">Portfolio.</p>
                        </button>
                    </NavLink>
                    <hr className="hr-nav-one" />
                </div>
                <div className="header-scnd-bloc">
                    <ScrollLink className='nav-btn' activeClass="active" to="banner-section" spy={true} smooth={true} offset={-70} duration={0}>Home</ScrollLink>
                    <ScrollLink className='nav-btn' activeClass="active" to="project-section" spy={true} smooth={true} offset={-70} duration={0}>Projects</ScrollLink>
                    <hr className="hr-nav-two" />
                    <ScrollLink className='nav-contact-btn' activeClass="active" to="contact-section" spy={true} smooth={true} offset={-70} duration={0}>Contact Me<i className="fa-regular fa-envelope"></i></ScrollLink>
                </div>
                <div className="mobile-menu">
                    <button onClick={toggleMobileMenu}><i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i></button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="mobile-bloc">
                    <ScrollLink className='mobile-nav-btn' activeClass="active" to="banner-section" spy={true} smooth={true} offset={-70} duration={0} onClick={handleNavLinkClick}>Home</ScrollLink>
                    <ScrollLink className='mobile-nav-btn' activeClass="active" to="project-section" spy={true} smooth={true} offset={-70} duration={0} onClick={handleNavLinkClick}>Projects</ScrollLink>
                    <ScrollLink className='mobile-nav-btn' activeClass="active" to="contact-section" spy={true} smooth={true} offset={-70} duration={0} onClick={handleNavLinkClick}>Contact</ScrollLink>
                </div>
            )}
        </header>
    )
}
