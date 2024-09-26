import { Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-min-max',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './input-min-max.component.html',
  styleUrl: './input-min-max.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMinMaxComponent),
      multi: true,
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputMinMaxComponent implements ControlValueAccessor {
  icon = input<string>();
  label = input<string>();

  idMin = input<string>();
  formControlNameMin = input<string>();
  errorMin = input<string>();

  idMax = input<string>();
  formControlNameMax = input<string>();
  errorMax = input<string>();

  private _value: string = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onInput(value: string) {
    this._value = value;
    this.onChange(value);
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
