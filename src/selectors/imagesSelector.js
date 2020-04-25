import { createSelector } from 'reselect';

export const getImages = (state) => state.images;
export const getCurrentImage = (state) => state.currentImage;

export const imagesSelector = createSelector(
    getImages,
    (images) => images,
);

export const currentImageSelector = createSelector(
    getImages,
    getCurrentImage,
    (images, currentImage) => images && currentImage && images.find((image) => image.uuid === currentImage.id),
);