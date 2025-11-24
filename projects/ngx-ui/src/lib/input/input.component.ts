import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'ngx-input',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() placeholder = 'Enter text';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();
  private _value = '';

  get value(): string {
    return this._value;
  }

  @Input()
  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      this.valueChange.emit(v);
    }
  }

  onChange: (v: string) => void = () => {};

  onTouched: () => void = () => {};

  writeValue(v: string): void {
    this._value = v ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
