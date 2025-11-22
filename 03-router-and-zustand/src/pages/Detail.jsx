// this is to obtain the params from de id
import { useParams, useNavigate } from "react-router"
import { useState, useEffect } from "react"

import { Link } from "../components/Link"

import snarkdown from 'snarkdown'
import styles from './css_modules/Detail.module.css'

function JobSection ({ title, content }) {
    // convert in html the content of the API with snarkdown library
    const html = snarkdown(content)

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                {title}
            </h2>

            <div className={`${styles.sectionContent} prose`} dangerouslySetInnerHTML={{__html: html}} />

        </section>
    )
}

export function JobDetail() {
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
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                <Link 
                    href="/search"
                    className={styles.breadcrumbButton}
                >
                    Jobs
                </Link>
                <span className={styles.breadcrumbSeparator}>/</span>
                <span className={styles.breadcrumbCurrent}>{job.titulo}</span>
                </nav>
            </div>

            <header className={styles.header}>
                <h1 className={styles.title}>
                {job.titulo}
                </h1>
                <p className={styles.meta}>
                {job.empresa} · {job.ubicacion}
                </p>
            </header>

            <button className={styles.applyButton}>
                Apply now
            </button>

            <JobSection title="Description" content={job.content.description} />
            <JobSection title="Responsibilities" content={job.content.responsibilities} />
            <JobSection title="Requirements" content={job.content.requirements} />
            <JobSection title="About the company" content={job.content.about} />
        </div>
    )
}