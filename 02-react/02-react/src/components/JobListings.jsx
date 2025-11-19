import JobCard from './JobCard'

function JobListings({ jobs }) {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Jobs Listings</h2>

            <div className="jobs-listings">
                {
                    jobs.length === 0 ? (
                        <p style={{ textAlign: 'center', padding: '1rem', textWrap: 'balance' }}>No jobs found</p>
                    ) : (
                        /* Here we will insert the job listings dynamically */
                        /* we use map to iterate over the jobsData array and return a JobCard component for each job */
                        jobs.map(job => {
                            return (
                                <JobCard key={job.id} job={job} />
                            )
                        })
                    )
                }
            </div>
        </>
    )
}

export default JobListings