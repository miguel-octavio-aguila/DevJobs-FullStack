import { useRouter } from "../hooks/useRouter.jsx"

export function HomePage() {
    const { navigateTo } = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const searchTerm = formData.get('search')
        
        
        const url = searchTerm ? `/search?text=${encodeURIComponent(searchTerm)}` : '/search'
        navigateTo(url)
    }

    return (
        <>
            <main>
                <section>
                    <img src="../../public/background.webp" alt="" />

                    <h1>Find your next job as a developer</h1>

                    <p>Join the thousands of developers that are already using DevJobs to find their next job.</p>

                    <form role="search" onSubmit={handleSearch}>
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                            <input name="search" type="text" placeholder="Search for a job" />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </section>

                <section>
                    <header>
                        <h2>Why DevJobs?</h2>
                        <p>DevJobs is a platform where you can find your next job as a developer. We help you to find your next job by connecting you with the best developers in the world.</p>
                    </header>

                    <footer>
                        <article>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                <path d="M12 12l0 .01" />
                                <path d="M3 13a20 20 0 0 0 18 0" />
                            </svg>
                            <h3>Find your dream job</h3>
                            <p>Search for thousands of jobs that match your skills and experience.</p>
                        </article>
                        <article>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.25"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-users">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                            </svg>
                            <h3>Connect with the best companies</h3>
                            <p>Connect with the best companies that are looking for developers. We help you to find the best companies that match your skills and experience.</p>
                        </article>
                        <article>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1.25"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-buildings">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
                                <path d="M16 8h2c1 0 2 1 2 2v11" />
                                <path d="M3 21h18" />
                                <path d="M10 12v0" />
                                <path d="M10 16v0" />
                                <path d="M10 8v0" />
                                <path d="M7 12v0" />
                                <path d="M7 16v0" />
                                <path d="M7 8v0" />
                                <path d="M17 12v0" />
                                <path d="M17 16v0" />
                            </svg>
                            <h3>Get the salary you deserve</h3>
                            <p>Get the salary you deserve. We help you to find the best salary that matches your skills and experience.</p>
                        </article>
                    </footer>
                </section>
            </main>
        </>
    )
}