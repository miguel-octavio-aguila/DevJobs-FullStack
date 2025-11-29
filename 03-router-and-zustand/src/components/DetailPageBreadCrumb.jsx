import styles from "./css_modules/DetailPageBreadCrumb.module.css"
import { Link } from "./Link"

export default function DetailPageBreadCrumb({ job }) {
    return (
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
    )
}