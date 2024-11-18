import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2 class="mt-4">Reactive Form:</h2>
    <form
      [formGroup]="emailForm"
      (ngSubmit)="handleSubmit()"
      class="bg-stone-500/20 w-fit p-3 rounded-md mt-2"
    >
      <label for="email">
        Email:
        <input
          class="text-black px-2 py-1 rounded ml-2"
          id="email"
          type="email"
          placeholder="Email"
          maxlength="50"
          formControlName="email"
        />
      </label>
      <button type="submit" class="ml-2">Submit</button>
    </form>
    <p class="h-6">{{ emailForm.value.email }}</p>
  `,
})
export class ReactiveFormComponent {
  emailForm = new FormGroup({
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(`Your email is ${this.emailForm.value.email}`);
  }
}
