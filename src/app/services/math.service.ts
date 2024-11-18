import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  add(a: number, b: number): number {
    return a + b;
  }
}

// TIP: You don't need signal if all you need is a simple method with no state
