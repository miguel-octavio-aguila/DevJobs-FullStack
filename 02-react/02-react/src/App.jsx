import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Pagination from './components/Pagination.jsx'
import SearchFormSection from './components/SearchFormSection.jsx'
import JobListings from './components/JobListings.jsx'

function App() {
    return (
        <>
            <Header />

            <main>
                <SearchFormSection />

                <section>
                    <JobListings />
                    <Pagination />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default App
