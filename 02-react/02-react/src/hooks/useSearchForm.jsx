import { useState } from "react"

let timeoutId = null

export function useSearchForm({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextChange }) {
    const [searchText, setSearchText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        // event.target is for onSubmit
        // event.currentTarget is for the onChange
        const formData = new FormData(event.currentTarget)

        if(event.target.name === idText) {
            return
        }
        
        const filters = {
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experienceLevel: formData.get(idExperienceLevel),
        }

        onSearch(filters)
    }

    const handleTextChange = (event) => {
        const inputValue = event.target.value
        setSearchText(inputValue) // we update the input immediately
        
        // Debounce: cancel the previous timeout and set a new one 
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            onTextChange(inputValue)
        }, 500)
    }

    return {
        searchText,
        handleSubmit,
        handleTextChange
    }
}