import { ReactiveFormComponent } from '@/app/components/reactive-form/reactive-form.component';
import { Component } from '@angular/core';
import { TemplateFormComponent } from '@/app/components/template-form/template-form.component';
import { FormValidationComponent } from '@/app/components/form-validation/form-validation.component';
import { BackButtonComponent } from '@/app/components/shared/back-button.component';

@Component({
  standalone: true,
  imports: [
    TemplateFormComponent,
    ReactiveFormComponent,
    FormValidationComponent,
    BackButtonComponent,
  ],
  template: `
    <h1>Forms</h1>
    <app-template-form />
    <app-reactive-form />
    <app-form-validation />
    <app-back-button />
  `,
})
export class FormsComponent {}
