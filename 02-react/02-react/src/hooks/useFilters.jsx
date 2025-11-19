import { useEffect, useState } from "react";

const RESULTS_PER_PAGE = 5

export function useFilters() {
    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: ''
    })

    const [textFilter, setTextFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [total, setTotal] = useState(0)

    // fetching of data
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://jscamp-api.vercel.app/api/jobs')
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
    }, [])
    
    const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE) // 10 / 5 = 2.2 = 3 pages
    
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
        handlePageChange,
        handleSearch,
        handleTextFilter
    }
}