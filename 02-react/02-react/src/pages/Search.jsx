import '../App.css' // Importamos los estilos globales de la aplicación
import { useEffect } from 'react' // Importamos el hook useEffect de React para manejar efectos secundarios

import Pagination from '../components/Pagination.jsx' // Importamos el componente de paginación
import SearchFormSection from '../components/SearchFormSection.jsx' // Importamos el componente del formulario de búsqueda
import JobListings from '../components/JobListings.jsx' // Importamos el componente que lista los trabajos

import { useFilters } from '../hooks/useFilters.jsx' // Importamos nuestro hook personalizado para manejar la lógica de filtrado

export function SearchPage() {
    // Usamos nuestro hook personalizado useFilters.
    // Este hook nos devuelve todo lo necesario para la página:
    // - currentPage: página actual
    // - jobsWithTextFilter: lista de trabajos ya filtrados
    // - totalPages: número total de páginas
    // - pagedResults: los trabajos que se deben mostrar en la página actual
    // - handlePageChange: función para cambiar de página
    // - handleSearch: función para aplicar filtros de búsqueda
    // - handleTextFilter: función para filtrar por texto
    const { currentPage, jobsWithTextFilter, totalPages, pagedResults, handlePageChange, handleSearch, handleTextFilter } = useFilters()

    // useEffect es un hook que nos permite ejecutar código cuando algo cambia.
    // En este caso, queremos actualizar el título de la pestaña del navegador.
    useEffect(() => {
        // 1. Guardamos el título que tenía la página antes de entrar aquí (por ejemplo "DevJobs").
        // Esto es importante para poder restaurarlo cuando salgamos de esta página.
        const previousTitle = document.title
        
        // 2. Cambiamos el título del documento (la pestaña del navegador).
        // Mostramos cuántos resultados hay y en qué página estamos.
        document.title = `Results: ${jobsWithTextFilter.length}, Page: ${currentPage} - DevJobs`

        // 3. Retornamos una "función de limpieza" (cleanup function).
        // React ejecutará esta función automáticamente cuando:
        // - El componente se desmonte (el usuario se vaya a otra página).
        // - O antes de volver a ejecutar el efecto (si cambian las dependencias).
        return () => {
            // Restauramos el título original que guardamos al principio.
            document.title = previousTitle
        }
    }, [currentPage, jobsWithTextFilter]) // El array de dependencias: el efecto se ejecutará cada vez que cambie 'currentPage' o 'jobsWithTextFilter'.

    return (
        <main>
            {/* Renderizamos la sección del formulario de búsqueda.
                Le pasamos las funciones para manejar la búsqueda y el cambio de texto. */}
            <SearchFormSection onSearch={handleSearch} onTextChange={handleTextFilter}/>

            <section>
                {/* Renderizamos la lista de trabajos, pasándole solo los resultados de la página actual. */}
                <JobListings jobs={pagedResults} />
                
                {/* Renderizamos la paginación, pasándole la página actual, el total y la función para cambiar. */}
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </section>
        </main>
    )
}