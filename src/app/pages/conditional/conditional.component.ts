import { Component } from '@angular/core';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';

@Component({
  standalone: true,
  imports: [BackButtonComponent],
  template: `
    <h1>Conditional Rendering</h1>

    @if (italian) {
    <p>Ciao</p>
    } @else {
    <p>Hello</p>
    }

    <button (click)="italian = !italian">Toggle</button>

    <app-back-button />
  `,
})
export class ConditionalComponent {
  italian = false;
}

// TIP: You can also use @else if and @else
