import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"

export function HeaderUserButton() {
    const { isLoggedIn, handleLogout } = useAuth()
    const navigate = useNavigate()
    
    return (
        <div>
            {
                isLoggedIn
                    ? <button onClick={handleLogout}>Logout</button>
                    : <button onClick={() => navigate('/login')}>Login</button>
            }
            <devjobs-avatar></devjobs-avatar>
        </div>
    )
}