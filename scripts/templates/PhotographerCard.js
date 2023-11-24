export default class PhotographerCard {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement('article');
        article.innerHTML = this.generatePhotographerCardHTML();
        return article;
    }

    generatePhotographerCardHTML() {
        return `
            ${this.generateLink()}
            ${this.generateLocation()}
            ${this.generateTagline()}
            ${this.generatePrice()}
        `;
    }

    generateLink() {
        return `
            <a href="photographer.html?id=${this.photographer.id}" role="link" aria-label="Voir le profil de ${this.photographer.name}">
                <img class="photographer_thumbnail" src="./assets/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
                <h2 class="photographer_name">${this.photographer.name}</h2>
            </a>
        `;
    }

    generateLocation() {
        return `<p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>`;
    }

    generateTagline() {
        return `<p class="photographer_tagline">${this.photographer.tagline}</p>`;
    }

    generatePrice() {
        return `<span class="photographer_price">${this.photographer.price}€/jour</span>`;
    }
}
