import '../App.css'
import { useState } from 'react'

import Pagination from '../components/Pagination.jsx'
import SearchFormSection from '../components/SearchFormSection.jsx'
import JobListings from '../components/JobListings.jsx'

import jobsData from '../data/data.json'

const RESULTS_PER_PAGE = 5

export function SearchPage() {
    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: ''
    })
    const [textFilter, setTextFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const jobsFilteredByFilters = jobsData.filter(job => {
        return (
            (filters.technology === '' || job.data.tech.toLowerCase() === filters.technology.toLowerCase()) &&
            (filters.location === '' || job.data.mod.toLowerCase() === filters.location.toLowerCase()) &&
            (filters.experienceLevel === '' || job.data.level.toLowerCase() === filters.experienceLevel.toLowerCase())
        )
    })

    const jobsWithTextFilter = textFilter === ''
        ? jobsFilteredByFilters
        : jobsFilteredByFilters.filter(job => {
            return job.title.toLowerCase().includes(textFilter.toLowerCase())
        })

    const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE) // 10 / 5 = 2.2 = 3 pages

    const pagedResults = jobsWithTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE, // page 1 -> 0, page 2 -> 5, page 3 -> 10, etc.
        currentPage * RESULTS_PER_PAGE // page 1 -> 5, page 2 -> 10, page 3 -> 15, etc.
    )

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


    return (
        <main>
            <SearchFormSection onSearch={handleSearch} onTextChange={handleTextFilter}/>

            <section>
                <JobListings jobs={pagedResults} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </section>
        </main>
    )
}