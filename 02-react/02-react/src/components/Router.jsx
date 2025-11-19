import { Children } from 'react'
import { useRouter } from '../hooks/useRouter.jsx'

// Definimos el componente Router.
// Recibe:
// - children: Los componentes <Route /> que pones dentro.
// - routes: Un array opcional de rutas (por si quisieras pasarlas como objeto en vez de componentes).
// - defaultComponent: El componente que se muestra si NINGUNA ruta coincide (tu 404).
export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    
    // Usamos tu hook personalizado para saber en qué URL estamos ahora mismo.
    const { currentPath } = useRouter()

    let routeParams = {}

    // 1. Iteramos sobre los 'children' (los <Route /> que pusiste en App.jsx).
    // Children.map es una utilidad de React para recorrer los hijos de forma segura.
    const routesFromChildren = Children.map(children, ({ props, type }) => {
        // Obtenemos el nombre del componente (debería ser 'Route').
        const { name } = type
        // Verificamos que sea un componente <Route />.
        const isRoute = name === 'Route'
        
        // Si es un Route, nos quedamos con sus 'props' (path y component).
        // Si no, devolvemos null.
        return isRoute ? props : null
    })

    // Concatenamos las rutas que vengan por props (routes) con las que sacamos de los children.
    // .filter(Boolean) elimina los 'null' que hayan podido quedar.
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    // AQUÍ ESTÁ LA MAGIA:
    // Buscamos (.find) la PRIMERA ruta cuyo 'path' coincida con el 'currentPath'.
    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true
        return false
    })?.component // Si encontramos una, extraemos su propiedad 'component'.

    // Si encontramos una 'Page' (componente coincidente), la renderizamos.
    // Si NO encontramos nada (Page es undefined), renderizamos el 'DefaultComponent' (tu 404).
    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}