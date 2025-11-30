import { createContext, useContext } from "react"

export const AuthContext = createContext()

// Avoid the imports like useContext(AuthContext)
export function useAuth() {
    const context = useContext(AuthContext)

    if (!context || context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}