import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2 class="mt-4">Template Form:</h2>
    <div class="bg-stone-500/20 w-fit p-3 rounded-md mt-2">
      <label for="username">
        Username:
        <input
          class="text-black px-2 py-1 rounded ml-2"
          id="username"
          type="text"
          placeholder="Username"
          maxlength="50"
          [(ngModel)]="username"
        />
      </label>
      <button (click)="onSubmit()" class="ml-2">Submit</button>
    </div>
    <p class="h-6">{{ username }}</p>
  `,
})
export class TemplateFormComponent {
  username = '';

  onSubmit() {
    alert(`Your username is ${this.username}`);
  }
}

// TIP: [(ngModel)] is a two-way data binding syntax in Angular. Similar to value={username} onChange={(e) => setUsername(e.target.value)} in React
