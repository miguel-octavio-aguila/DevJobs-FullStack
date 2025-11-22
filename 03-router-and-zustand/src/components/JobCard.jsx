import { useState } from "react"
import { Link } from "./Link"

import styles from './css_modules/JobCard.module.css'

function JobCard ( { job } ) {
    const [isApplied, setIsApplied] = useState(false)

    const handleApplyClick = () => {
        setIsApplied(true)
    }

    const buttonText = isApplied ? 'Applied' : 'Apply Now'
    const buttonClass = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'

    return (
        <article
            className="job-listing-card"
            data-modalidad = { job.data.modalidad }
            data-nivel = { job.data.nivel }
            data-tecnologia = { job.data.tecnologia }
        >
            <div>
                <h3>
                    <Link href={`/jobs/${job.id}`} className={styles.title}>
                        {job.titulo}
                    </Link>
                </h3>
                <small>{ job.empresa } | { job.ubicacion }</small>
                <p>{ job.descripcion }</p>
            </div>

            <div className={styles.actions}>
                <Link href={`/jobs/${job.id}`} className={styles.details}>
                    View job
                </Link>
                <button className={buttonClass} onClick={handleApplyClick}>{buttonText}</button>
            </div>
        </article>
    )
}

export default JobCard