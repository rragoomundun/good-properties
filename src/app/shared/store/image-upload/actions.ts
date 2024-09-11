import { createAction, props } from '@ngrx/store';

import { ImageUpload } from '../../models/ImageUpload.model';

export const initUploadImage = createAction(
  '[Image Uploader Component] Init Upload Image',
);

export const uploadImage = createAction(
  '[Image Uploader Component] Upload Image',
  props<{ file: File; image: ImageUpload; index: number }>(),
);
export const uploadImageSuccess = createAction(
  '[Image Uploader Component] Upload Image Success',
  props<{ key: string; link: string; index: number }>(),
);
export const uploadImageFailed = createAction(
  '[Image Uploader Component] Upload Image Failed',
  props<{ error: any; index: number }>(),
);

export const uploadImageDelete = createAction(
  '[Image Uploader Component] Upload Image Delete',
  props<{ key: string }>(),
);
export const uploadImageDeleteSuccess = createAction(
  '[Image Uploader Component] Upload Image Delete Success',
);
export const uploadImageDeleteFailed = createAction(
  '[Image Uploader Component] Upload Image Delete Failed',
);

export const uploadImageDeleteFromStore = createAction(
  '[Image Uploader Component] Upload Image Delete From Store',
  props<{ index: number }>(),
);
