import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-svg',
  template: `
    <svg
      class="inline-block"
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        [attr.stroke]="color"
        stroke-width="12"
        d="M80 105.485 48.284 73.769a4 4 0 0 0-5.657 0l-19.799 19.8a4 4 0 0 0 0 5.656L65.603 142"
      />
      <rect
        width="36"
        height="132"
        x="147.279"
        y="37"
        [attr.stroke]="color"
        stroke-linejoin="round"
        stroke-width="12"
        rx="4"
        transform="rotate(45 147.279 37)"
      />
    </svg>
  `,
})
export class TodoSVGComponent {
  color = '#a855f7';
  width = '16px';
  height = '16px';
}
