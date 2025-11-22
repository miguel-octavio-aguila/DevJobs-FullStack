import './App.css'

// lazy loading
// we use lazy loading to load the components on demand
// we use Suspense to show a fallback while the component is loading
// THIS IS THE PRINCIPAL KEY FOR OPTIMIZING EVERY APP
import { lazy, Suspense } from 'react'

// react router
import { Route, Routes } from 'react-router'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// import { HomePage } from './pages/Home.jsx'
// import { SearchPage } from './pages/Search.jsx'
// import { JobDetail } from './pages/Detail.jsx'
// import { NotFoundPage } from './pages/404.jsx'

// we won't use this route components anymore
// import { Router } from './components/Router.jsx'
// import { Route } from './components/Route.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))

function App() {
    return (
        <>
            <Header />

            <Suspense fallback={<div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', padding: '1rem' }}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/jobs/:id" element={<JobDetail />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>

            <Footer />
        </>
    )
}

export default App
