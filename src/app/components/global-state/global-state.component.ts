import { Component } from '@angular/core';
import { ContextService } from '@/app/services/context.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-global-state',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2 class="mt-4">Global State</h2>
    <p>{{ contextService.username() }}</p>

    <!-- Update username form -->
    <div class="bg-stone-500/20 w-fit p-3 rounded-md mt-2">
      <label for="username">
        Username:
        <input
          #usernameInput
          class="text-black px-2 py-1 rounded ml-2"
          id="username"
          type="text"
          placeholder="Username"
          maxlength="50"
        />
      </label>
      <button
        (click)="contextService.setUsername(usernameInput.value)"
        class="ml-2"
      >
        Submit
      </button>
    </div>
  `,
})
export class GlobalStateComponent {
  constructor(public contextService: ContextService) {}
}

// TIP: Remember: signals variables are functions, so you need to call them with parentheses like contextService.username()
// TIP: Use angular template variable #usernameInput to get the input value with usernameInput.value and pass it to the setUsername method
