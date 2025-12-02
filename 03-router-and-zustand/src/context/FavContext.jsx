import { createContext, use } from "react";

export const FavoritesContext = createContext()

export function useFavorites() {
    const context = use(FavoritesContext)

    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider')
    }

    return context
}