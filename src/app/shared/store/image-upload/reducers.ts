import { createReducer, on } from '@ngrx/store';

import { ImageUploadState } from './image-upload.state';

import { Status } from '../../enums/status.enum';

import * as ImageUploadActions from './actions';

export const inititalImageUploadState: ImageUploadState = {
  images: [],
};

export const imageUploadReducer = createReducer(
  inititalImageUploadState,
  on(ImageUploadActions.uploadImage, (state, { image }) => {
    return {
      ...state,
      images: [...state.images, image],
    };
  }),
  on(ImageUploadActions.uploadImageSuccess, (state, { key, link, index }) => {
    const images = JSON.parse(JSON.stringify(state.images));

    images[index].fileKey = key;
    images[index].fileLink = link;
    images[index].status = Status.SUCCESS;
    images[index].error = null;

    return {
      ...state,
      images,
    };
  }),
  on(ImageUploadActions.uploadImageFailed, (state, { error, index }) => {
    const images = JSON.parse(JSON.stringify(state.images));

    images[index].error = error;
    images[index].status = Status.ERROR;

    return {
      ...state,
      images,
    };
  }),
  on(ImageUploadActions.uploadImageDeleteFromStore, (state, { index }) => {
    const images = JSON.parse(JSON.stringify(state.images));

    images.splice(index, 1);

    return {
      ...state,
      images,
    };
  }),
);
