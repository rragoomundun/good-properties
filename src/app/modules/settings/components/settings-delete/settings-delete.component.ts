import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AppState } from '../../../../store/app.store';

import * as SettingsActions from '../../store/actions';

import { selectSettingsAccountDeleteStatus } from '../../store/selectors';

import { Status } from '../../../../shared/enums/status.enum';

@Component({
  selector: 'app-settings-delete',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './settings-delete.component.html',
  styleUrl: './settings-delete.component.scss',
})
export class SettingsDeleteComponent implements OnInit {
  status$: Observable<Status>;

  status: Status;

  constructor(private store: Store<AppState>) {
    this.status$ = this.store.select(selectSettingsAccountDeleteStatus);

    this.status$.subscribe((status) => (this.status = status));
  }

  ngOnInit(): void {
    this.store.dispatch(SettingsActions.initDelete());
  }

  onDeleteClick(): void {
    this.store.dispatch(SettingsActions.deleteAccount());
  }
}
