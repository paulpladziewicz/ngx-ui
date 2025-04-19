import {Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ngx-text-input',
  imports: [
    InputComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements ControlValueAccessor {
  private static nextId = 0;
  @Input() id = `ngx-text-input-${TextInputComponent.nextId++}`;
  @Input() label: string = '';
  @Input() placeholder: string = 'Enter text';
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();
  private _value = '';

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;    // ← assign here
      this.onChange(v);
      this.valueChange.emit(v);
    }
  }

  onChange = (_: any) => {};

  onTouched = () => {};

  writeValue(value: string): void {
    this._value = value ?? '';
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

