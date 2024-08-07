import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import { PlatformService } from '../../../../shared/services/platform/platform.service';

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
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService,
  ) {
    this.status$ = this.store.select(selectRegisterConfirmStatus);

    this.status$.subscribe((status) => (this.status = status));
  }

  ngOnInit(): void {
    if (this.platformService.isPlatformBrowser()) {
      const { confirmationToken } = this.activatedRoute.snapshot.params;

      this.store.dispatch(AuthActions.registerConfirm({ confirmationToken }));
    }
  }
}
