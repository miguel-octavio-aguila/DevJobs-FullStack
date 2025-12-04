import { Link } from "./Link"
import DetailApplyButton from "./DetailApplyButton"

import { useFavoritesStore } from "../store/favoritesStore"
import { useAuth } from "../context/AuthContext"

import styles from './css_modules/JobCard.module.css'

function JobCard ( { job } ) {
    const { toggleFavorite, isFavorite } = useFavoritesStore()
    const { isLoggedIn } = useAuth()

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
                {
                    isLoggedIn && (
                        <button onClick={() => toggleFavorite(job.id)} className={styles.favorite}>
                            {isFavorite(job.id) 
                                ?   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-heart">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                                    </svg>
                                :   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                            }
                        </button>
                    )
                }
            </div>
        </article>
    )
}

export default JobCard