import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
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
