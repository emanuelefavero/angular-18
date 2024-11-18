import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hamburger-svg',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18L20 18"
        class="stroke-black dark:stroke-white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        class="stroke-black dark:stroke-white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        class="stroke-black dark:stroke-white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  `,
})
export class HamburgerSVGComponent {
  width = '100%';
  height = '100%';
}
