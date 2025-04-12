import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() value: string = '';
  @Input() placeholder: string = 'Enter text';
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }
}

