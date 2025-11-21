import { useEffect, useState } from "react";

// custom hook
export function useRouter() {
    // State para almacenar la ruta actual
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    

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

    function navigateTo(path) {
        // navigate to the new url
        window.history.pushState({}, '', path)
        // trigger the popstate event to update the url in the browser
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return {
        currentPath,
        navigateTo
    }
}