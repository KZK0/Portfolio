import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './header.scss';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
                    <NavLink className='nav-btn' to="/">Home</NavLink>
                    {/* <NavLink className='nav-btn' to="/Project">Projects</NavLink> */}
                    <ScrollLink className='nav-btn' activeClass="active" to="project-section" spy={true} smooth={true} offset={-70} duration={0}>Projects</ScrollLink>
                    <hr className="hr-nav-two" />
                    <ScrollLink className='nav-contact-btn' activeClass="active" to="contact-section" spy={true} smooth={true} offset={-70} duration={0}>Contact Me<i className="fa-regular fa-envelope"></i></ScrollLink>
                </div>
            </nav>
        </header>
    )
}
