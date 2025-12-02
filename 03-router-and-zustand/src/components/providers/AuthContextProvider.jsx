import { AuthContext } from "../../context/AuthContext"
import { useState } from "react"

export function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    const value = {
        isLoggedIn,
        handleLogin,
        handleLogout
    }

    return (
        // AuthContext instead of AuthContext.Provider because it is a new feature of React
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
}