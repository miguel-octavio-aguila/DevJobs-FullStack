import { useEffect, useState } from "react";
import { useRouter } from "./useRouter.jsx"

const RESULTS_PER_PAGE = 5

export function useFilters() {
    const [filters, setFilters] = useState(() => {
        const params = new URLSearchParams(window.location.search)
        return {
            technology: params.get('technology') || '',
            location: params.get('type') || '',
            experienceLevel: params.get('level') || ''
        }
    })

    const [textFilter, setTextFilter] = useState(() => {
        const params = new URLSearchParams(window.location.search)
        return params.get('text') || ''
    })
    const [currentPage, setCurrentPage] = useState(() => {
        const params = new URLSearchParams(window.location.search)
        const page = Number(params.get('page'))
        return !page || page < 1 ? 1 : page
    })

    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [total, setTotal] = useState(0)

    const { navigateTo } = useRouter()

    // fetching of data
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true)

                // we use URLSearchParams to create a query string from the filters
                const params = new URLSearchParams()
                // we add the filters to the query string
                if (textFilter) params.append('text', textFilter)
                // we add the technology filter to the query string
                if (filters.technology) params.append('technology', filters.technology)
                // we add the location filter to the query string
                if (filters.location) params.append('type', filters.location)
                // we add the experience level filter to the query string
                if (filters.experienceLevel) params.append('level', filters.experienceLevel)

                // we calculate the offset for the pagination
                // offset is the number of items to skip
                const offset = (currentPage - 1) * RESULTS_PER_PAGE
                
                params.append('offset', offset)
                // limit is the number of items to return
                params.append('limit', RESULTS_PER_PAGE)

                // we convert the query string to a string
                const queryParams = params.toString()

                // we fetch the jobs
                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
                const json = await response.json()
                setJobs(json.data)
                setTotal(json.total)
            } catch (error) {
                console.error('Error fetching jobs:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [textFilter, filters, currentPage])

    useEffect(() => {
        const params = new URLSearchParams()

        if(filters.technology) params.append('technology', filters.technology)
        if(filters.location) params.append('type', filters.location)
        if(filters.experienceLevel) params.append('level', filters.experienceLevel)
        if(textFilter) params.append('text', textFilter)

        if(currentPage > 1) params.append('page', currentPage)

        const newUrl = params.toString()
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname

        navigateTo(newUrl)
    }, [currentPage, filters, textFilter, navigateTo])
    
    // we calculate the total number of pages
    const totalPages = Math.ceil(total / RESULTS_PER_PAGE) // 10 / 5 = 2.2 = 3 pages
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    
    const handleSearch = (filters) => {
        setFilters(filters)
        setCurrentPage(1)
    }
    
    const handleTextFilter = (text) => {
        setTextFilter(text)
        setCurrentPage(1)
    }

    return {
        loading,
        currentPage,
        jobs,
        total,
        totalPages,
        filters,
        textFilter,
        handlePageChange,
        handleSearch,
        handleTextFilter
    }
}