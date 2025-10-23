import { state } from "./config.js";

state.count++;

console.log(state);


const filter = document.querySelector('#filter-location')
const message = document.querySelector('#filter-selected-value')

filter.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filter.value

    if (selectedValue) {
        message.textContent = `You selected ${selectedValue}`
    } else {
        message.textContent = ''
    }

    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad
        const modalidad = job.getAttribute('data-modalidad')
        const isShown = selectedValue === '' || selectedValue === modalidad
        job.classList.toggle('is-hidden', isShown === false)
    })
})
