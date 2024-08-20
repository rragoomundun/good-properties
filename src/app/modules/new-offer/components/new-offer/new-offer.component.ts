import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ImageUploaderComponent } from '../../../../shared/components/image-uploader/image-uploader.component';

@Component({
  selector: 'app-new-offer',
  standalone: true,
  imports: [TranslateModule, ImageUploaderComponent],
  templateUrl: './new-offer.component.html',
  styleUrl: './new-offer.component.scss',
})
export class NewOfferComponent {}
