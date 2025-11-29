import styles from "./css_modules/DetailPageHeader.module.css"

export default function DetailPageHeader({ job, isLoggedIn }) {
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

            <button disabled={!isLoggedIn} className={styles.applyButton}>
                {isLoggedIn ? 'Apply now' : 'Login to apply'}
            </button>
        </>
    )
}