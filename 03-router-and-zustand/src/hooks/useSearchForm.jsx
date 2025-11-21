import { useState, useRef } from "react"

//let timeoutId = null // something temporal. This is a bad practice because if we use this component more times, it will share the same timeoutId in all of them

export function useSearchForm({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextChange }) {
    const [searchText, setSearchText] = useState('')

    const timeoutId = useRef(null)

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
        // timeoutId.current is the value of the timeoutId
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }

        timeoutId.current = setTimeout(() => {
            onTextChange(inputValue)
        }, 500)
    }

    return {
        searchText,
        handleSubmit,
        handleTextChange
    }
}