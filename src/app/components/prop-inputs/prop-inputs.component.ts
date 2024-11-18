import { Component, Input } from '@angular/core';

// * Child Component that accepts props (inputs)
@Component({
  selector: 'app-prop-inputs',
  standalone: true,
  template: `<h2>Hello {{ name }}</h2>`,
})
export class PropInputsComponent {
  @Input() name = '';
}
