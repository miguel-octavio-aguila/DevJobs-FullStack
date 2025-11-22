// we don't need this anymore because we are using react router
// import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

// custom hook
export function useRouter() {

    // State para almacenar la ruta actual
    //const [currentPath, setCurrentPath] = useState(window.location.pathname)

    // this is with react router
    const navigate = useNavigate()
    const location = useLocation()

    // we don't need this anymore because we are using react router
    // Aplicacion de Single Page Application (SPA)
    // Effect para manejar el evento popstate
    // popstate es disparado cuando el usuario navega usando el botón de 
    // retroceso o avance del navegador
    // useEffect(() => {
    //     // Función para manejar el evento popstate
    //     const handlePopState = () => {
    //         // Actualizar la ruta actual
    //         setCurrentPath(window.location.pathname)
    //     }

    //     // Agregar el evento popstate al objeto window
    //     window.addEventListener('popstate', handlePopState)

    //     return () => {
    //         // Eliminar el evento popstate al desmontar el componente
    //         window.removeEventListener('popstate', handlePopState)
    //     }
    // }, [])

    function navigateTo(path) {
        // this is with react router
        navigate(path)

        // we don't need this anymore because we are using react router
        // // navigate to the new url
        // window.history.pushState({}, '', path)
        // // trigger the popstate event to update the url in the browser
        // window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return {
        currentPath: location.pathname,
        navigateTo
    }
}