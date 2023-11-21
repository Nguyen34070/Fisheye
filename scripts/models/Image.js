import Media from "../models/Media.js";

export default class Image extends Media {
    constructor(data) {
        super(data);
        this.image = data.image;
    }
};