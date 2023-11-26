import Api from '../api/Api.js';
import Photographer from '../models/Photographer.js';
import PhotographerCard from '../templates/PhotographerCard.js';

const photographerSection = document.querySelector(".photographer_section");
const photographerApi = new Api("./data/photographers.json");
// Affichage des photographes
const displayPhotographer = async () => {
    const photographerData = await photographerApi.get();
    const photographers = photographerData.photographers;

    photographers
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const template = new PhotographerCard(photographer);
            const photographerCard = template.createPhotographerCard();
            photographerSection.appendChild(photographerCard);
        });
};
displayPhotographer();