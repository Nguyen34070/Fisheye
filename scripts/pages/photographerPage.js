import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import PagePhotographer from "../templates/pagePhotographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import PhotographerMedias from "../templates/PhotographerMedias.js";
import { displayTotalLikes } from "../utils/likes.js";
import { openCloseFormContact, validateForm } from "../utils/form.js";
import { openCloseFilterMenu, displayMediaWithFilter } from "../utils/filter.js";
import { displayLightbox } from "../utils/lightbox.js";
// Instance de l'API pour les photographes
const photographerApi = new Api("./data/photographers.json");
// Récupération de l'ID du photographe à partir de la requête de l'URL
const photographerId = new URLSearchParams(window.location.search).get("id");
// Récupère les donées du photographe et des médias associés
export const getPhotographerById = async () => {
    const { photographers, media} = await photographerApi.get();
    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    const medias = media 
        .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);
    return { photographer, medias };
};
// Affichage des profiles des photographes
const displayProfile = async () => {
    const { photographer, medias } = await getPhotographerById();
    const headerTemplate = new PagePhotographer(photographer);
    headerTemplate.createPagePhotographer();
    const mediasTemplate = new PhotographerMedias(photographer, medias);
    mediasTemplate.createMedias();

    displayTotalLikes();
    openCloseFormContact();
    validateForm();
    openCloseFilterMenu();
    displayMediaWithFilter(mediasTemplate);
    displayLightbox(mediasTemplate);
};

displayProfile();
