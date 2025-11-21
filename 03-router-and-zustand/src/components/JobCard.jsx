import { useState } from "react"

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
                <h3>{ job.titulo }</h3>
                <small>{ job.empresa } | { job.ubicacion }</small>
                <p>{ job.descripcion }</p>
            </div>

            <button className={buttonClass} onClick={handleApplyClick}>{buttonText}</button>
        </article>
    )
}

export default JobCard