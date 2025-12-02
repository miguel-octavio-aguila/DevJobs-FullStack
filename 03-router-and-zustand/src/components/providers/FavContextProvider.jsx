import { useState } from "react"
import { FavoritesContext } from "../../context/FavContext"

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    const addFavorite = (job) => {
        setFavorites((prevFavorites) => [...prevFavorites, job])
    }

    const removeFavorite = (jobId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((job) => job.id !== jobId))
    }

    const isFavorite = (jobId) => {
        return favorites.some((job) => job.id === jobId)
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return (
        <FavoritesContext value={value}>
            {children}
        </FavoritesContext>
    )
}