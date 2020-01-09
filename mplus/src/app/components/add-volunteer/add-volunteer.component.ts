import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Volunteer } from './../../models/Volunteer';
import { VolunteersService } from './../../services/volunteers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent implements OnInit {

  volunteerForm: FormGroup;

  constructor(
    private volunteersService: VolunteersService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { 

    this.volunteerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', Validators.email],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      isAvailable: [false, Validators.required],
      isAdmin: [false, Validators.required],
      isEMoHC: [false, Validators.required],
      isCantor: [false, Validators.required],
      isLector: [false, Validators.required],
      isGifts: [false, Validators.required],
      isGiftsChild: [false, Validators.required],
      isOther: [false, Validators.required],
      isRosary: [false, Validators.required],
      isServer: [false, Validators.required],
      isTech: [false, Validators.required],
      isUsher: [false, Validators.required],
    })
  }

  ngOnInit() {
  }

  get f() {return this.volunteerForm.controls;}

  onSubmit({value}: {value: Volunteer}) {
    if(!this.volunteerForm.valid) {
      return this.openSnackBar('Form is not valid!', 'Error!!!');
    } else {
      this.volunteersService.addVolunteer(value);
      this.openSnackBar('Volunteer Added!', 'Cool!');
      this.router.navigate(['/volunteers']);
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    }
    );
  }

}
