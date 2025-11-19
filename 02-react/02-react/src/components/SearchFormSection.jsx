import { useId } from "react"

import { useSearchForm } from "../hooks/useSearchForm"

function SearchFormSection({ onSearch, onTextChange }) {
    const idText = useId()
    const idTechnology = useId()
    const idLocation = useId()
    const idExperienceLevel = useId()

    // custom hook
    const { handleSubmit, handleTextChange } = useSearchForm({
        idTechnology,
        idLocation,
        idExperienceLevel,
        idText,
        onSearch,
        onTextChange
    })

    return (
        <section className="jobs-search">
            <h1>Find your next job</h1>
            <p>Explore thousands of job opportunities in the tech industry.</p>

            {/* Instead of using onSubtmit in the form, we are going to use onChange to view the jobs when the filters change like the search bar */}
            <form onChange={handleSubmit} id="jobs-search-form" role="search">
                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokelinewidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>

                    <input 
                        name={idText} 
                        id="jobs-search-input" 
                        type="text" 
                        placeholder="Search for jobs, companies or skills" 
                        onChange={handleTextChange} 
                    />

                    {/* <button type="submit" style={{position: 'absolute', right: '4px' }}>Search</button> */}
                </div>

                <div className="search-filters">
                    <select name={idTechnology} id="filter-technology">
                        <option value="">Technology</option>
                        <optgroup label="Popular Technologies">
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="react">React</option>
                            <option value="nodejs">Node.js</option>
                        </optgroup>
                        <option value="java">Java</option>
                        <hr />
                        <option value="csharp">C#</option>
                        <option value="c">C</option>
                        <option value="c++">C++</option>
                        <hr />
                        <option value="ruby">Ruby</option>
                        <option value="php">PHP</option>
                    </select>

                    <select name={idLocation} id="filter-location">
                        <option value="">Location</option>
                        <option value="remoto">Remote</option>
                        <option value="cdmx">Mexico City</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="monterrey">Monterrey</option>
                        <option value="barcelona">Barcelona</option>
                    </select>

                    <select name={idExperienceLevel} id="filter-experience-level">
                        <option value="">Experience Level</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                    </select>
                </div>
            </form>

            <span id="filter-selected-value"></span>
        </section>
    )
}

export default SearchFormSection