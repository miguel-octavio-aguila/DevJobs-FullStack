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
            <div className={styles.headerContent}>
                <h1 className={styles.title}>Register</h1>
                <p className={styles.subtitle}>
                    Register to apply for jobs
                </p>
            </div>

            <div className={styles.card}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <input
                            id={nameId}
                            name={nameId}
                            type="text"
                            className={styles.input}
                            placeholder="Name"
                            required
                            />
                        </div>
                    </div>  
                    <div className={styles.formGroup}>
                        <div className={styles.inputWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            <input
                            id={emailId}
                            name={emailId}
                            type="email"
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

                    <button type="submit" className={styles.submitButton}>
                        Register
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>Already have an account?</span>
                </div>

                <div className={styles.socialButtons}>
                    <button 
                        type="button" 
                        className={styles.outlineButton} 
                        style={{gridColumn: '1 / -1', textAlign: 'center'}}
                        onClick={() => navigate('/login')}
                    >
                        Login here
                    </button>
                </div>
            </div>
        </div>
    )
}