function Header() {
    return (
        <header>
            <h1>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Devjobs
            </h1>

            <nav>
                <a href="../index.html">Home</a>
                <a href="jobs.html">Jobs</a>
            </nav>

            <div>
                <a href="">Post a job</a>
                <a href="">Login</a>
                <devjobs-avatar></devjobs-avatar>
            </div>
        </header>
    )
}

export default Header