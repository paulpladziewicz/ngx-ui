import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';


@Component({
  selector: 'ngx-button',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }
}
