import { state } from "./config.js";

const filter = document.querySelector('#filter-location')
const message = document.querySelector('#filter-selected-value')

filter.addEventListener('change', function () {
    const selectedValue = filter.value

    if (selectedValue) {
        message.textContent = `You selected ${selectedValue}`
    } else {
        message.textContent = ''
    }
})
