import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  increment(): void {
    this.count.update((prev) => prev + 1);
  }

  decrement(): void {
    this.count.update((prev) => prev - 1);
  }

  reset(): void {
    this.count.update(() => 0);
  }
}
