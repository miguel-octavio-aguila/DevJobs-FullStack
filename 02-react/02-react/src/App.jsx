import './App.css'

import { useState, useEffect } from 'react'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { HomePage } from './pages/Home.jsx'
import { SearchPage } from './pages/Search.jsx'
import { NotFoundPage } from './pages/404.jsx'

function App() {
    // State para almacenar la ruta actual
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    let page = <NotFoundPage />
    if (currentPath === '/') {
        page = <HomePage />
    } else if (currentPath === '/search') {
        page = <SearchPage />
    }

    // Aplicacion de Single Page Application (SPA)
    // Effect para manejar el evento popstate
    // popstate es disparado cuando el usuario navega usando el botón de 
    // retroceso o avance del navegador
    useEffect(() => {
        // Función para manejar el evento popstate
        const handlePopState = () => {
            // Actualizar la ruta actual
            setCurrentPath(window.location.pathname)
        }

        // Agregar el evento popstate al objeto window
        window.addEventListener('popstate', handlePopState)

        return () => {
            // Eliminar el evento popstate al desmontar el componente
            window.removeEventListener('popstate', handlePopState)
        }
    }, [])

    return (
        <>
            <Header />

            {page}

            <Footer />
        </>
    )
}

export default App
