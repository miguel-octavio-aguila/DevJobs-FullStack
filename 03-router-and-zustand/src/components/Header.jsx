import { NavLink } from "react-router"
import { HeaderUserButton } from "./HeaderUserButton"

function Header() {
    return (
        <header>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'white' }}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Devjobs
                </h1>
            </NavLink>

            <nav>
                <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
                <NavLink to="/search" style={{ textDecoration: 'none' }} className={({ isActive }) => isActive ? 'nav-link-active' : ''}>Jobs</NavLink>
            </nav>

            <HeaderUserButton />
        </header>
    )
}

export default Header