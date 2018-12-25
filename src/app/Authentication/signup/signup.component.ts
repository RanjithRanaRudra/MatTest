import { MyErrorStateMatcher } from './../../../../../MatRock/src/app/auth/sign-up/sign-up.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  SignUpForm = new FormGroup({
    'nameFormControl': new FormControl('', [
      Validators.required,
    ]),
    'emailControl': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'passwordFormControl': new FormControl('', [
      Validators.required,
    ]),
    'confirmPasswordFormControl': new FormControl('', [
      Validators.required,
    ]),
  });
  matcher = new MyErrorStateMatcher();
  ngOnInit() {
  }
}
