import { Link } from "./Link"

function Header() {
    return (
        <header>
            <Link href="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'white' }}>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Devjobs
                </h1>
            </Link>

            <nav>
                <Link href="/" style={{ textDecoration: 'none' }}>Home</Link>
                <Link href="/search" style={{ textDecoration: 'none' }}>Jobs</Link>
            </nav>

            <div>
                <Link href="/post-job" style={{ textDecoration: 'none' }}>Post a job</Link>
                <Link href="/login" style={{ textDecoration: 'none' }}>Login</Link>
                <devjobs-avatar></devjobs-avatar>
            </div>
        </header>
    )
}

export default Header