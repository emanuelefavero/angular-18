import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  imports: [],
  template: ` <button (click)="increment.emit()">Add</button> `,
})
export class IncrementButtonComponent {
  // TIP: With the @Output decorator, the increment property can be used to emit events to the parent component
  @Output() increment = new EventEmitter<void>();
}
