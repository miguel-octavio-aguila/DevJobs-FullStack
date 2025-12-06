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
            <div className={styles.headerContent}>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>
                    Log in to find your next opportunity.
                </p>
            </div>

            <div className={styles.card}>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            <input
                            id={emailId}
                            type="email"
                            name={emailId}
                            className={styles.input}
                            placeholder="Email"
                            required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input
                            id={passwordId}
                            name={passwordId}
                            type="password"
                            className={styles.input}
                            placeholder="Password"
                            required
                            />
                        </div>
                    </div>

                    <div className={styles.optionsRow}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" className={styles.checkbox} />
                            Remember me
                        </label>
                        <a href="#" className={styles.forgotPassword}>Forgot password?</a>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Log In
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>Don't have an account?</span>
                </div>

                <div className={styles.socialButtons}>
                    <button type="button" className={styles.outlineButton} onClick={() => navigate('/register')}>
                        Sign up as a developer
                    </button>
                    <button type="button" className={styles.outlineButton} onClick={() => navigate('/register')}>
                        Sign up as a company
                    </button>
                </div>
            </div>
        </div>
    )
}