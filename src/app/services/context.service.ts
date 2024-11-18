import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  username = signal('john.doe');

  setUsername(newUsername: string): void {
    this.username.update(() => newUsername);
  }
}
