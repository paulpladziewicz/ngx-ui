import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
  signal,
  HostListener,
} from '@angular/core';
import { InputComponent } from '../input/input.component';

import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'ngx-text-input',
  imports: [InputComponent, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements ControlValueAccessor {
  value = signal('');
  disabled = signal(false);
  @Output() valueChange = new EventEmitter<string>();


  updateValue(value: string) {
    this.value.set(value);
    this.onChange(value);
    this.valueChange.emit(value);
  }

  @HostListener('input', ['$event.target.value'])
  handleInput(v: string) {
    this.updateValue(v);
  }
}
