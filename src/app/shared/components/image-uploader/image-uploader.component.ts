import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AppState } from '../../../store/app.store';

import { ImageUpload } from '../../models/ImageUpload.model';

import { Status } from '../../enums/status.enum';

import { selectImageUploadImages } from '../../store/image-upload/selectors';

import { ErrorUtil } from '../../utils/error.util';

import * as ImageUploadActions from '../../store/image-upload/actions';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [TranslateModule, NgbTooltipModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss',
})
export class ImageUploaderComponent implements OnInit {
  images$: Observable<ImageUpload[]>;

  images: ImageUpload[];

  constructor(private store: Store<AppState>) {
    this.images$ = this.store.select(selectImageUploadImages);

    this.images$.subscribe((images) => (this.images = images));
  }

  get errors(): string[] {
    const errors: string[] = [];

    for (const image of this.images) {
      errors.push(
        ErrorUtil.getInputError(
          'COMPONENTS.IMAGE_UPLOADER.ERRORS.',
          image.error,
          ['SIZE', 'MIMETYPE'],
        ),
      );
    }

    return errors;
  }

  ngOnInit(): void {
    this.store.dispatch(ImageUploadActions.initUploadImage());
  }

  onImageChange(event: Event): void {
    const eventTarget = <HTMLInputElement>event.target;

    for (const file of eventTarget.files) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.store.dispatch(
          ImageUploadActions.uploadImage({
            file,
            image: {
              image: fileReader.result,
              fileKey: null,
              fileLink: null,
              status: Status.IN_PROGRESS,
              error: null,
            },
            index: this.images.length,
          }),
        );
      };

      fileReader.readAsDataURL(file);
    }
  }

  onXMarkClick(index: number) {
    if (this.errors[index] === '') {
      this.store.dispatch(
        ImageUploadActions.uploadImageDelete({
          key: this.images[index].fileKey,
        }),
      );
    }

    this.store.dispatch(
      ImageUploadActions.uploadImageDeleteFromStore({ index }),
    );
  }
}
