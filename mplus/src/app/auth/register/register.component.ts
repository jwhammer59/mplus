import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MustMatch } from '../../common/validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required] 
    }, {
      validator: MustMatch('password', 'passwordConfirm')
    });
  }

  get f() {return this.registerForm.controls;}
  
  getEmailErrorMessage() {
    return this.f.email.hasError('required') ? 'You must enter a value' :
        this.f.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  
  getPasswordErrorMessage() {
    return this.f.password.hasError('required') ? 'You must enter a value' :
        this.f.password.hasError('minlength') ? 'Password must be at least 6 characters' :
            '';
  }
  
  getPasswordConfirmErrorMessage() {
    return this.f.passwordConfirm.hasError('required') ? 'You must enter a value' :
        this.f.passwordConfirm.hasError('mustMatch') ? 'Password must match' :
            '';
  }
  
  onSubmit() {
    this.authService.register(this.f.email.value, this.f.password.value)
    .then(res => {
      this.openSnackBar('You are Registered!', 'Welcome!');
      this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      this.openSnackBar(err, 'Sorry!');
    })
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
