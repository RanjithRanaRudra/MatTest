import { MyErrorStateMatcher } from './../../Shared/error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }
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
  signup() {
    // this.router.navigate(['/Authentication/login']);
  }
}
