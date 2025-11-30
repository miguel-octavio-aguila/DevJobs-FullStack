// this is to obtain the params from de id
import { useParams, useNavigate } from "react-router"
import { useState, useEffect } from "react"

import JobSection from "../components/JobSection.jsx"
import DetailPageBreadCrumb from "../components/DetailPageBreadCrumb.jsx"
import DetailPageHeader from "../components/DetailPageHeader.jsx"

import styles from './css_modules/Detail.module.css'

export default function JobDetail() {
    // id is the name of the param <Route path="/jobs/:id" element={<JobDetail />} />
    const { id } = useParams()
    const navigate = useNavigate()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://jscamp-api.vercel.app/api/jobs/${id}`)
            .then(response => {
                if(!response.ok) throw new Error('Job not found') 
                return response.json()
            })
            .then(json => {
                setJob(json)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
                <div className={styles.loading}>
                    <p className={styles.loadingText}>Loading...</p>
                </div>
            </div>
        )
    }

    if (error || !job) {
        return (
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
                <div className={styles.error}>
                    <h2 className={styles.errorTitle}>
                        Job not found
                    </h2>
                    <button onClick={() => navigate('/')} className={styles.errorButton}>
                        Back to home
                    </button>
                </div>
            </div>
        )
    }
    
    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
            <DetailPageBreadCrumb job={job} />

            <DetailPageHeader job={job} />

            <JobSection title="Description" content={job.content.description} />
            <JobSection title="Responsibilities" content={job.content.responsibilities} />
            <JobSection title="Requirements" content={job.content.requirements} />
            <JobSection title="About the company" content={job.content.about} />
        </div>
    )
}