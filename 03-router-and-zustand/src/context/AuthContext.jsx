import { createContext, /*useContext */ use } from "react"
// use insted of useContext because it is a new feature of React

export const AuthContext = createContext()

// Avoid the imports like useContext(AuthContext)
export function useAuth() {
    const context = /*useContext(AuthContext)*/ use(AuthContext)

    if (!context || context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}