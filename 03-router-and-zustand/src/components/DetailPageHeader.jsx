import styles from "./css_modules/DetailPageHeader.module.css"
import DetailApplyButton from "./DetailApplyButton"
import FavoriteButton from "./FavoriteButton"

export default function DetailPageHeader({ job }) {
    return (
        <>
            <header className={styles.header}>
                    <h1 className={styles.title}>
                    {job.titulo}
                    </h1>
                    <p className={styles.meta}>
                    {job.empresa} · {job.ubicacion}
                    </p>
            </header>

            <div className={styles.applyButtonContainer}>
                <DetailApplyButton />
                <FavoriteButton jobId={job.id} />
            </div>
        </>
    )
}