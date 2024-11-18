import { Component } from '@angular/core';
import { FetchDataComponent } from '@/app/components/fetch-data/fetch-data.component';
import { GlobalStateComponent } from '@/app/components/global-state/global-state.component';
import { GlobalMethodsComponent } from '@/app/components/global-methods/global-methods.component';
import { CounterComponent } from '@/app/components/counter/counter.component';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';

@Component({
  standalone: true,
  imports: [
    FetchDataComponent,
    GlobalStateComponent,
    GlobalMethodsComponent,
    CounterComponent,
    BackButtonComponent,
  ],
  template: `
    <h1>Injection</h1>
    <app-fetch-data />
    <app-global-state />
    <app-global-methods />
    <app-counter />
    <app-back-button />
  `,
})
export class InjectionComponent {}
