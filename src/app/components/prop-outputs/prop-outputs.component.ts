import { Component, Output, EventEmitter } from '@angular/core';

// * Child Component that sends events (outputs)
@Component({
  selector: 'app-prop-outputs',
  standalone: true,
  template: ` <button
    class="text-white bg-primary-500 px-2 py-1 rounded-md hover:bg-primary-600 active:bg-primary-700"
    (click)="increment.emit()"
  >
    Add
  </button>`,
})
export class PropOutputsComponent {
  // TIP: With the @Output decorator, the increment property can be used to emit events to the parent component
  @Output() increment = new EventEmitter<void>();
}
