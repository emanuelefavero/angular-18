import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
})
export class FormValidationComponent {
  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9]*$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]),
  });

  handleSubmit() {
    alert(
      `Your credentials are ${this.profileForm.value.username} and ${this.profileForm.value.email}`
    );

    this.profileForm.reset(); // Reset form after submission
  }
}
