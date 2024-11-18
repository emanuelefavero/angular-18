import { Component, Output, EventEmitter } from '@angular/core';

// * Child Component that sends events (outputs)
@Component({
  selector: 'app-prop-outputs',
  standalone: true,
  template: ` <button (click)="increment.emit()">Add</button>`,
})
export class PropOutputsComponent {
  // TIP: With the @Output decorator, the increment property can be used to emit events to the parent component
  @Output() increment = new EventEmitter<void>();
}
