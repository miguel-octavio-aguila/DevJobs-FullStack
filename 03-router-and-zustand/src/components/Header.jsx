import { NavLink } from "react-router"
import { HeaderUserButton } from "./HeaderUserButton"
import { useFavoritesStore } from "../store/favoritesStore"
import { useAuth } from "../context/AuthContext"

function Header() {
    const { countFavorites } = useFavoritesStore()
    const { isLoggedIn } = useAuth()

    const numberOfFavorites = countFavorites()

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
                {
                    isLoggedIn && (
                        <NavLink 
                            to="/profile" 
                            style={{ textDecoration: 'none' }} 
                            className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                        >Profile 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-heart">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                            </svg> {numberOfFavorites}
                        </NavLink>
                    )
                }
            </nav>

            <HeaderUserButton />
        </header>
    )
}

export default Header