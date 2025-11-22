import './App.css'

// react router
import { Route, Routes } from 'react-router'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'

// we won't use this route components anymore
// import { Router } from './components/Router.jsx'
// import { Route } from './components/Route.jsx'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
