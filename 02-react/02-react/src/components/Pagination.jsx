function Pagination({ currentPage = 1, totalPages = 10 }) {
    // generar un array de paginas para mostrar
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    return (
        <nav className="pagination">
            {/* <!-- First page link / conditional rendering --> */}
            {
                !isFirstPage && (
                    <a href="#">
                        {/* <!-- chevron --> */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinewidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 6l-6 6l6 6" />
                        </svg>
                    </a>
                )
            }

            {/* <!-- Here we will insert the pagination links dynamically --> */}
            {pages.map(page => (
                <a
                    href="#"
                    className={currentPage === page ? 'is-active' : ''}
                >
                    {page}
                </a>
            ))}

            {/* <!-- Last page link --> */}
            {
                !isLastPage && (
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinewidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </a>
                )
            }
        </nav>
    )
}

export default Pagination