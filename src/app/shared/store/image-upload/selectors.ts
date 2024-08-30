// import { createSelector } from '@ngrx/store';

// import { ImageUploadState } from './image-upload.state';

// import { AppState } from '../../../store/app.store';

// const imageUploadState = (state: AppState) => state.imageUpload;

// export const selectImageUploadImages = createSelector(
//   imageUploadState,
//   (state: ImageUploadState) => state.images,
// );

// export const selectImageUploadKeys = createSelector(
//   imageUploadState,
//   (state: ImageUploadState) => state.keys,
// );

// export const selectImageUploadStatus = createSelector(
//   imageUploadState,
//   (state: ImageUploadState) => state.status,
// );

// export const selectImageUploadErrors = createSelector(
//   imageUploadState,
//   (state: ImageUploadState) => state.errors,
// );

import { createSelector } from '@ngrx/store';

import { ImageUploadState } from './image-upload.state';

import { AppState } from '../../../store/app.store';

const imageUploadState = (state: AppState) => state.imageUpload;

export const selectImageUploadImages = createSelector(
  imageUploadState,
  (state: ImageUploadState) => state.images,
);
