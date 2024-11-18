import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { IUser } from '@/app/types/user';

// NOTE: Remember to add provideHttpClient() to your app.config.ts file

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  users = signal<IUser[]>([]);

  constructor(private http: HttpClient) {
    this.fetchUsers(); // fetch users immediately
  }

  fetchUsers(): void {
    this.http.get<IUser[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: (err) => {
        console.error('Failed to fetch users:', err);
      },
    });
  }
}
