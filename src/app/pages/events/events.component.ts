import { IncrementButtonComponent } from '@/app/components/shared/increment-button.component';
import { Component } from '@angular/core';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';

@Component({
  standalone: true,
  imports: [BackButtonComponent, IncrementButtonComponent],
  template: ` <h1>Events</h1>
    <div class="flex flex-col my-4 text-2xl">
      {{ counter }}
      <!-- TIP: The increment button component (children) will emit an event and call the onIncrement method on this component (parent) @see increment-button.component -->
      <app-increment-button (increment)="onIncrement()" />
    </div>

    <!-- TIP: We can attach DOM events to any component and call methods in this component -->
    <app-back-button (mouseover)="onMouseOver()" (mouseout)="onMouseOut()" />
    @if (message) {
    <span>{{ message }}</span>
    }`,
})
export class EventsComponent {
  counter = 1;
  onIncrement() {
    this.counter++;
  }

  message = '';
  onMouseOver() {
    this.message = '← to the homepage';
  }
  onMouseOut() {
    this.message = '';
  }
}
