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
            data-mod = { job.data.mod }
            data-level = { job.data.level }
            data-tech = { job.data.tech }
        >
            <div>
                <h3>{ job.title }</h3>
                <small>{ job.company } | { job.location }</small>
                <p>{ job.description }</p>
            </div>

            <button className={buttonClass} onClick={handleApplyClick}>{buttonText}</button>
        </article>
    )
}

export default JobCard