import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss',
})
export class ImageUploaderComponent {
  images: (string | ArrayBuffer | null)[];

  constructor() {
    this.images = [];
  }

  onImageChange(event: Event): void {
    const eventTarget = <HTMLInputElement>event.target;

    for (const file of eventTarget.files) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.images.push(fileReader.result);
      };

      fileReader.readAsDataURL(file);
    }
  }
}
