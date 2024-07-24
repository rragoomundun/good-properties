import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatedPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.setBackgroundHeight();
  }

  @HostListener('window:resize')
  setBackgroundHeight() {
    if (isPlatformBrowser(this.platformId)) {
      const backgroundEl = <HTMLDivElement>(
        document.querySelector('#background')
      );

      backgroundEl.style.height = '';

      const mainHeight = document.querySelector('main')?.clientHeight;

      backgroundEl.style.height = mainHeight + 'px';
    }
  }
}
