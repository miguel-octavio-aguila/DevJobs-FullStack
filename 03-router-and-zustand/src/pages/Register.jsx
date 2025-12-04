import { useId } from 'react'
import { useNavigate } from 'react-router'
import styles from './css_modules/Login.module.css'
import { useAuth } from '../context/AuthContext'

export default function Register() {
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()

    const { handleLogin } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const name = formData.get(nameId)
        const email = formData.get(emailId)
        const password = formData.get(passwordId)

        // Mock register - en una app real, harías una petición a la API
        if (name && email && password) {
        handleLogin()
        navigate('/search')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Register</h1>
                <p className={styles.subtitle}>
                    Register to apply for jobs
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Name
                        </label>
                        <input
                        id={nameId}
                        name={nameId}
                        type="text"
                        className={styles.input}
                        placeholder="Juan Pérez"
                        required
                        />
                    </div>  
                    <div className={styles.formGroup}>
                        <label htmlFor={emailId} className={styles.label}>
                        Email
                        </label>
                        <input
                        id={emailId}
                        name={emailId}
                        type="email"
                        className={styles.input}
                        placeholder="tu@email.com"
                        required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <input
                        id={passwordId}
                        name={passwordId}
                        type="password"
                        className={styles.input}
                        placeholder="••••••••"
                        required
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Register
                    </button>
                </form>

                <p className={styles.footer}>
                    Already have an account?{' '}
                    <a href="/login" className={styles.link}>
                        Login here
                    </a>
                </p>
            </div>
        </div>
    )
}