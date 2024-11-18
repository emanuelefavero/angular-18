import { Component } from '@angular/core';
import { MathService } from '@/app/services/math.service';

@Component({
  selector: 'app-global-methods',
  standalone: true,
  template: `
    <h2 class="mt-4">Global Methods</h2>
    <p>1 + 2 = {{ mathService.add(1, 2) }}</p>
  `,
})
export class GlobalMethodsComponent {
  constructor(public mathService: MathService) {}
}
