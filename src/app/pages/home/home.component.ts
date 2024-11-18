import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="text-primary-500 font-semibold text-3xl mb-4">
      Angular Features
    </h1>

    <ul class="list-disc px-4">
      <li>Use the navigation links above to check out Angular features ☝️</li>
      <li>Browse the repository to see the features implementation</li>
    </ul>
  `,
})
export class HomeComponent {}
