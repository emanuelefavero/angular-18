import { Component } from '@angular/core';
import { CounterService } from '@/app/services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h2 class="mt-4">Counter</h2>
    <p [attr.data-testid]="'counter' + counterService.count()">
      {{ counterService.count() }}
    </p>
    <button (click)="counterService.increment()">Increment</button>
    <button (click)="counterService.decrement()" class="ml-2">Decrement</button>
    <button (click)="counterService.reset()" class="ml-2">Reset</button>
  `,
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}
}

// TIP: use [attr.ATTRIBUTE] if you want to add an attribute that is not built in like [class]
// TIP: Remember to use `public` in the constructor to make the service available in the template
