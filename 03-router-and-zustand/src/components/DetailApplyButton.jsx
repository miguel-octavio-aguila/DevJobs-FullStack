import { AuthContext } from "../context/AuthContext"
import { useContext, useState } from "react"

import styles from "./css_modules/DetailApplyButton.module.css"

export default function DetailApplyButton() {
    const { isLoggedIn } = useContext(AuthContext)
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