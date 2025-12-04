import { Link } from "./Link"
import DetailApplyButton from "./DetailApplyButton"
import FavoriteButton from "./FavoriteButton"

import styles from './css_modules/JobCard.module.css'

function JobCard ( { job } ) {
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
                <DetailApplyButton />
                <FavoriteButton jobId={job.id} />
            </div>
        </article>
    )
}

export default JobCard