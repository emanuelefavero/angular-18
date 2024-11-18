import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="mt-2 block text-primary-500 hover:underline active:text-primary-600"
      (click)="goBack()"
    >
      Go Back
    </button>
  `,
})
export class BackButtonComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
