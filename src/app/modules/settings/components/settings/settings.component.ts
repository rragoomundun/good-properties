import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(private router: Router) {}

  get tab(): string {
    const tab = this.router.url.split('/')[2].split('?')[0];
    return tab;
  }
}
