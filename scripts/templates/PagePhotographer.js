export default class PagePhotographer {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPagePhotographer() {
        const profilePhotographer = document.querySelector(".main_about");
        const formName = document.querySelector(".modal_form_name");

        formName.textContent = this.photographer.name;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.generateMetaDescription();
        }

        const aboutHtml = this.generateAboutHtml();
        profilePhotographer.innerHTML = aboutHtml;

        return aboutHtml;
    }

    generateMetaDescription() {
        return `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
    }

    generateAboutHtml() {
        return `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="btn btn_cta" type="button" aria-label="Ouverture du formulaire">Contactez-moi</button>
            <img class="photographer_thumbnail" src="assets/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
    }
};
