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
  selector: 'app-select',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
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
export class SelectComponent implements ControlValueAccessor {
  id = input<string>();
  icon = input<string>();
  label = input<string>();
  options = input<{ value: string; text: string }[]>();
  formControlName = input<string>();

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
