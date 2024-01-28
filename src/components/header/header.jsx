import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
                        <img src="" alt="Home button designed KZKO" />
                    </NavLink>
                </div>
                <div className="header-scnd-bloc">
                    <NavLink className='nav-btn' to="/">Home</NavLink>
                    <NavLink className='nav-btn' to="/Project">Projects</NavLink>
                    <hr className="hr-nav" />
                    <NavLink className='nav-contact-btn' to="/Contact">Contact Me</NavLink>
                </div>
            </nav>
        </header>
    )
}
