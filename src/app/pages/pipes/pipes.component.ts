import { Component } from '@angular/core';
import {
  UpperCasePipe,
  LowerCasePipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
} from '@angular/common';
import { ReversePipe } from '@/app/pipes/reverse.pipe'; // ? custom pipe
import { BackButtonComponent } from '@/app/components/shared/back-button.component';

// TIP: Pipes are functions that can be used in templates to format data.
// TIP: Angular provides some built-in pipes like uppercase, lowercase, date, number, currency, etc. @see https://angular.dev/guide/templates/pipes
// TIP: You can also create custom pipes.

@Component({
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    ReversePipe,
    BackButtonComponent,
  ],
  template: `
    <h1>Pipes</h1>

    <h2 class="font-bold">UpperCasePipe:</h2>
    {{ 'hello' | uppercase }}

    <h2 class="font-bold">LowerCasePipe:</h2>
    {{ 'HELLO' | lowercase }}

    <h2 class="font-bold">CurrencyPipe:</h2>
    {{ 100 | currency : 'EUR' }}

    <h2 class="font-bold">DatePipe:</h2>
    {{ christmas | date : 'fullDate' }}

    <h2 class="font-bold">DecimalPipe:</h2>
    {{ num | number : '1.1-2' }}

    <h2 class="font-bold">PercentPipe:</h2>
    {{ percent | percent : '1.0-1' }}

    <h2 class="font-bold">Two pipes at once:</h2>
    {{ christmas | date : 'fullDate' | uppercase }}

    <h2 class="font-bold">Custom Pipe (reverse):</h2>
    {{ 'hello' | reverse }}

    <app-back-button />
  `,
})
export class PipesComponent {
  christmas = new Date(new Date().getFullYear(), 11, 25);
  num = 3.14159265359;
  percent = 0.549;
}
