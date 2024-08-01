import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import { Status } from '../../../../shared/enums/status.enum';

import { selectRegisterConfirmStatus } from '../../store/selectors';

import { AppState } from '../../../../store/app.store';

import * as AuthActions from '../../store/actions';

@Component({
  selector: 'app-register-confirm',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './register-confirm.component.html',
  styleUrl: './register-confirm.component.scss',
})
export class RegisterConfirmComponent implements OnInit {
  status$: Observable<Status>;

  status: Status;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.status$ = this.store.select(selectRegisterConfirmStatus);

    this.status$.subscribe((status) => (this.status = status));
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const { confirmationToken } = this.activatedRoute.snapshot.params;

      this.store.dispatch(AuthActions.registerConfirm({ confirmationToken }));
    }

    this.setBackgroundImage();
  }

  @HostListener('window:resize')
  setBackgroundImage() {
    if (isPlatformBrowser(this.platformId)) {
      const backgroundEl = <HTMLDivElement>(
        document.querySelector('#background')
      );

      backgroundEl.style.height = '';

      const mainHeight = document.querySelector('main')?.clientHeight;

      backgroundEl.style.height = mainHeight + 'px';
      backgroundEl.style.backgroundImage = 'url("/assets/images/houses.jpeg")';
    }
  }
}
