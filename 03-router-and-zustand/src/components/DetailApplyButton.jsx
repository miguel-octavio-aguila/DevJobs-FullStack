import { useState } from "react"

import { useAuth } from "../context/AuthContext"

import styles from "./css_modules/DetailApplyButton.module.css"

export default function DetailApplyButton() {
    const { isLoggedIn } = useAuth()
    const [isApplied, setIsApplied] = useState(false)
    
    const handleApplyClick = () => {
        setIsApplied(true)
    }
    
    const buttonText = isApplied ? 'Applied' : 'Apply Now'
    const buttonClass = isApplied ? `${styles.applyButton} ${styles['is-applied']}` : styles.applyButton

    return (
        <button disabled={!isLoggedIn} className={buttonClass} onClick={handleApplyClick}>
            {isLoggedIn ? buttonText : 'Login to apply'}
        </button>
    )
}