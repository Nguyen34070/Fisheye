import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import PagePhotographer from "../templates/pagePhotographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import PhotographerMedias from "../templates/PhotographerMedias.js";
import { displayTotalLikes } from "../utils/likes.js";
import { openCloseFormContact, validateForm } from "../utils/form.js";
import { openCloseFilterMenu, displayMediaWithFilter } from "../utils/filter.js";
import { displayLightbox } from "../utils/lightbox.js";

const photographerApi = new Api("./data/photographers.json");
const photographerId = new URLSearchParams(window.location.search).get("id");

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

const displayProfile = async () => {
    const { photographer, medias } = await getPhotographerById();
    const headerTemplate = new PagePhotographer(photographer);
    headerTemplate.createPagePhotographer();
    const mediasTemplate = new PhotographerMedias(photographer, medias);
    mediasTemplate.createPhotographerMedias();

    displayTotalLikes();
    openCloseFormContact();
    validateForm();
    openCloseFilterMenu();
    displayMediaWithFilter(mediasTemplate);
    displayLightbox(mediasTemplate);
};

displayProfile();
