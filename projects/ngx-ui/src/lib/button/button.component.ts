import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;
  @Input({ required: true }) type: string = 'button';
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }
}
