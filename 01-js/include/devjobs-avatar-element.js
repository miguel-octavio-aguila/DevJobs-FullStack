class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); //llamar al constructor de la clase padre

        this.attachShadow({ mode: 'open' })
    }

    createURL(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }

    render() {
        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'miguel-octavio-aguila';
        const size = this.getAttribute('size') ?? '38';

        const url = this.createURL(service, username);

        this.shadowRoot.innerHTML = `
        <style>
        img {
            width: ${size}px;
            height: ${size}px;
            border-radius: 100%;
            display: block;
        }
        </style>

        <img 
            src="${url}" 
            alt="Avatar de ${username}" 
            class="avatar"
        />
        `
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);