import { useAuth } from "../context/AuthContext"

export function HeaderUserButton() {
    const { isLoggedIn, handleLogin, handleLogout } = useAuth()
    
    return (
        <div>
            {
                isLoggedIn
                    ? <button onClick={handleLogout}>Logout</button>
                    : <button onClick={handleLogin}>Login</button>
            }
            <devjobs-avatar></devjobs-avatar>
        </div>
    )
}