import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  input,
  OnInit,
  viewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
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
export class AutocompleteComponent implements ControlValueAccessor, OnInit {
  inputEl = viewChild<ElementRef>('input');
  dropdownEl = viewChild<ElementRef>('dropdown');

  id = input<string>();
  icon = input<string>();
  label = input<string>();
  items = input<string[]>();
  formControlName = input<string>();
  control = input<AbstractControl>();
  error = input<string>();

  availableItems: string[];
  selected: number;

  private _value: string = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.availableItems = [];
    this.selected = 0;

    this.setDropdownWidth();
  }

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

  setDropdownWidth(): void {
    if (this.dropdownEl()) {
      this.dropdownEl().nativeElement.style.width = `${this.inputEl().nativeElement.clientWidth}px`;
    }
  }

  setValue(): void {
    this.inputEl().nativeElement.value = this.availableItems[this.selected];
    this.availableItems = [];
    this.selected = 0;

    this.control().setValue(this.inputEl().nativeElement.value);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.setDropdownWidth();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    const outsideInputEl =
      this.inputEl().nativeElement.contains(event.target) === false;
    const outsideDropdownEl =
      this.dropdownEl() &&
      this.dropdownEl().nativeElement.contains(event.target) === false;

    if (
      (outsideInputEl && outsideDropdownEl) ||
      (this.dropdownEl() === undefined && outsideInputEl)
    ) {
      if (
        this.items().find(
          (item) => item === this.inputEl().nativeElement.value,
        ) === undefined
      ) {
        this.inputEl().nativeElement.value = '';
      }

      this.availableItems = [];
    }
  }

  onInputKeyup(event: KeyboardEvent): void {
    if (event.key !== 'Enter') {
      const value = this.inputEl().nativeElement.value;

      if (value) {
        this.availableItems = this.items().filter((item) =>
          new RegExp(`^${value}`, 'i').test(item),
        );
      } else {
        this.availableItems = [];
      }

      setTimeout(() => this.setDropdownWidth());
    }
  }

  onInputKeydown(event: KeyboardEvent): void {
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }

    if (this.availableItems.length > 0) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.selected > 0) {
            this.selected--;

            const selectedEl = <HTMLLIElement>(
              document.querySelector('app-autocomplete #dropdown .selected')
            );

            if (
              selectedEl.offsetTop - selectedEl.offsetHeight <
              this.dropdownEl().nativeElement.scrollTop
            ) {
              this.dropdownEl().nativeElement.scrollTo(
                0,
                this.selected * selectedEl.offsetHeight,
              );
            }
          }
          break;
        case 'ArrowDown':
          if (this.selected < this.availableItems.length - 1) {
            this.selected++;

            const selectedEl = <HTMLLIElement>(
              document.querySelector('app-autocomplete #dropdown .selected')
            );

            if (
              selectedEl.offsetTop + selectedEl.offsetHeight >
              this.dropdownEl().nativeElement.clientHeight
            ) {
              this.dropdownEl().nativeElement.scrollTo(
                0,
                (this.selected - 4) * selectedEl.offsetHeight,
              );
            }
          }
          break;
        case 'Enter':
          this.setValue();
          break;
      }
    }
  }

  onItemClick(): void {
    this.setValue();
  }

  onItemMouseOver(index: number): void {
    this.selected = index;
  }
}
