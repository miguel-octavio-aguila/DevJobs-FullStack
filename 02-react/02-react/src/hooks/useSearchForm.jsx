import { useState } from "react"

export function useSearchForm({ idTechnology, idLocation, idExperienceLevel, onSearch, onTextChange }) {
    const [searchText, setSearchText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        // event.target is for onSubmit
        // event.currentTarget is for the onChange
        const formData = new FormData(event.currentTarget)
        
        const filters = {
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experienceLevel: formData.get(idExperienceLevel),
        }

        onSearch(filters)
    }

    const handleTextChange = (event) => {
        const inputValue = event.target.value
        setSearchText(inputValue)
        onTextChange(inputValue)
    }

    return {
        searchText,
        handleSubmit,
        handleTextChange
    }
}