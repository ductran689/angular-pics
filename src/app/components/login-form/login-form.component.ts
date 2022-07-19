import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor() {}
  emailPattern = '^[A-Z0-9._%+-]++@(?:[A-Z0-9-]++.)++[A-Z]{2,}+$';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
  });
  ngOnInit(): void {}
  onSubmit(): any {
    console.log('asdads');
  }
}
