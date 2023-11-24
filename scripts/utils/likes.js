import { getPhotographerById } from "../pages/photographerPage.js";
// récupère les médias du photographe en utlisant la fonction getPhotographerById
export const displayTotalLikes = async () => {
    const { medias } = await getPhotographerById();
    const allBtnLike = document.querySelectorAll(".btn_like");
    const likesElement = document.querySelector(".photographer_likes_count");
// Calcul le nombre total de like de tous les médias
    const updateTotalLikes = () => {
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        likesElement.textContent = `${totalLikes}`;
    };

    updateTotalLikes();
// Serie d'actions pour les évènements au clique pour les likes
    allBtnLike.forEach(btn => {
        btn.addEventListener("click", () => {
            const media = medias.find(media => media.id == btn.dataset.id);

            !btn.classList.contains("liked") ? media.likes++ : media.likes--;

            btn.classList.toggle("liked");

            const likesElement = btn.previousElementSibling;
            likesElement.textContent = `${media.likes}`;

            updateTotalLikes();
        });
    });
};