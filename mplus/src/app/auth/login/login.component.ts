import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.router.navigate(['/dashboard'])
      }
    });
  }

  get f() {return this.loginForm.controls;}

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

  onSubmit() {
    this.authService.login(
      this.f.email.value, 
      this.f.password.value)
    .then(res => {
      this.openSnackBar('Your Logged In!', 'Welcome!');
      this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      this.openSnackBar(err, 'Oh Snap!')
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
