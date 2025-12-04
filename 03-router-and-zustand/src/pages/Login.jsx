import { useId } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import styles from './css_modules/Login.module.css'

export default function Login() {
    const { handleLogin } = useAuth()
    const navigate = useNavigate()
    const passwordId = useId()
    const emailId = useId()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const email = formData.get(emailId)
        const password = formData.get(passwordId)
        
        // Mock login - en una app real, harías una petición a la API
        if (email && password) {
        handleLogin()
        navigate('/search')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.subtitle}>
                    Access to your account to apply for offers
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor={emailId} className={styles.label}>
                            Email
                        </label>
                        <input
                        id={emailId}
                        type="email"
                        name={emailId}
                        className={styles.input}
                        placeholder="tu@email.com"
                        required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor={passwordId} className={styles.label}>
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
                        Login
                    </button>
                </form>

                <p className={styles.footer}>
                    Don't have an account?{' '}
                    <a href="/register" className={styles.link}>
                        Register here
                    </a>
                </p>
            </div>
        </div>
    )
}