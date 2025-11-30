import { createContext, useContext } from "react"

export const AuthContext = createContext()

// Avoid the imports like useContext(AuthContext)
export function useAuth() {
    const context = useContext(AuthContext)

    return context
}