import { Component, Input } from '@angular/core';

// * Child Component that accepts props (inputs)
@Component({
  selector: 'app-prop-inputs',
  standalone: true,
  template: `<p>Hello {{ name }}</p>`,
})
export class PropInputsComponent {
  @Input() name = '';
}
