import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';

import { FileService } from '../../services/file/file.service';

import * as ImageUploadActions from './actions';

@Injectable()
export class ImageUploadEffects {
  action$: Actions = inject(Actions);

  constructor(private fileService: FileService) {}

  uploadImage$ = createEffect(() =>
    this.action$.pipe(
      ofType(ImageUploadActions.uploadImage),
      mergeMap((action) =>
        this.fileService.uploadFile(action.file).pipe(
          map((result) =>
            ImageUploadActions.uploadImageSuccess({
              key: result.key,
              link: result.link,
              index: action.index,
            }),
          ),
          catchError((error) =>
            of(
              ImageUploadActions.uploadImageFailed({
                error: error.error,
                index: action.index,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  deleteImage$ = createEffect(() =>
    this.action$.pipe(
      ofType(ImageUploadActions.uploadImageDelete),
      mergeMap((action) =>
        this.fileService.deleteFile(action.key).pipe(
          map(() => ImageUploadActions.uploadImageDeleteSuccess()),
          catchError((error) =>
            of(ImageUploadActions.uploadImageDeleteFailed()),
          ),
        ),
      ),
    ),
  );
}
