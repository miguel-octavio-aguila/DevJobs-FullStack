import snarkdown from 'snarkdown'
import styles from './css_modules/JobSection.module.css'

export default function JobSection ({ title, content }) {
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