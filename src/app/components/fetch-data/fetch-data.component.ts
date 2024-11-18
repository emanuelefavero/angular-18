import { Component } from '@angular/core';
import { UsersService } from '@/app/services/users.service';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  template: `
    <h2 class="mt-4">Fetch Data</h2>
    @defer {
    <ul>
      @for (user of usersService.users(); track user.id) {
      <li>
        <span class="font-bold">
          {{ user.name }}
        </span>
        <span class="ml-2 font-light">
          {{ user.email }}
        </span>
      </li>
      }
    </ul>
    } @placeholder {
    <p>No users found</p>
    } @loading (minimum 0.4s) {
    <p>Loading...</p>
    }
  `,
})
export class FetchDataComponent {
  constructor(public usersService: UsersService) {}
}
