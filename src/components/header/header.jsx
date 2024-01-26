import { NavLink } from "react-router-dom"
import './header.scss'

export const Header = () => {
    return (
        <header>
            <nav className='header-nav'>
                <div className="header-first-bloc">
                    <NavLink to="/">
                        <img src="" alt="Home button designed KZKO" />
                    </NavLink>
                </div>
                <div className="header-scnd-bloc">
                    <NavLink className='nav-btn' to="/">Home</NavLink>
                    <NavLink className='nav-btn' to="/Project">My Projects</NavLink>
                    <NavLink className='nav-contact-btn' to="/Contact">Contact Me</NavLink>
                </div>
            </nav>
        </header>
    )
}