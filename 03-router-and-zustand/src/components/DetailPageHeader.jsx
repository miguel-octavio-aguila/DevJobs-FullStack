import styles from "./css_modules/DetailPageHeader.module.css"
import DetailApplyButton from "./DetailApplyButton"
import FavoriteButton from "./FavoriteButton"

export default function DetailPageHeader({ job }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerInfo}>
                    <h1 className={styles.title}>
                        {job.titulo}
                    </h1>
                    <p className={styles.meta}>
                        {job.empresa} · {job.ubicacion}
                    </p>
                </div>

                <div className={styles.headerActions}>
                    <DetailApplyButton />
                    <FavoriteButton jobId={job.id} />
                </div>
            </header>
        </>
    )
}