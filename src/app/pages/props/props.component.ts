import { Component, Input } from '@angular/core';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';
import { PropInputsComponent } from '@/app/components/prop-inputs/prop-inputs.component';
import { PropOutputsComponent } from '@/app/components/prop-outputs/prop-outputs.component';

@Component({
  standalone: true,
  imports: [BackButtonComponent, PropInputsComponent, PropOutputsComponent],
  template: ` <h1>Props</h1>

    <h2 class="mt-2 mb-2 font-bold text-xl">Inputs</h2>
    <app-prop-inputs [name]="name" />

    <h2 class="mt-2 mb-2 font-bold text-xl">Outputs</h2>
    <app-prop-outputs (increment)="onIncrement()" />
    <p class="mt-2">Counter: {{ counter }}</p>

    <app-back-button />`,
})
export class PropsComponent {
  name = 'John';

  counter = 1;
  onIncrement() {
    this.counter++;
  }
}

// TIP: With @Input we can pass props to the child component
// TIP: With @Output we can emit events to the parent component
