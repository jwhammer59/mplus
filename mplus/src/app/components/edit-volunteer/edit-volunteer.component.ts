import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VolunteersService } from './../../services/volunteers.service';
import { Volunteer } from '../../models/Volunteer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.css']
})
export class EditVolunteerComponent implements OnInit {

  volunteerEditForm: FormGroup;
  volunteer: Observable<Volunteer>;
  id: string;

  constructor(
    private volunteersService: VolunteersService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.volunteerEditForm = this.fb.group({
      id: '',
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
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
      isServer: [false, Validators.required],
      isTech: [false, Validators.required],
      isOther: [false, Validators.required],
      isUsher: [false, Validators.required],
      isRosary: [false, Validators.required],
    });

    this.volunteer = this.volunteersService.getVolunteer(this.id).pipe(
      tap(volunteer => this.volunteerEditForm.patchValue(volunteer))
    );
  }

  onSubmit({value}: {value: Volunteer}) {
    this.volunteersService.updateVolunteer(value);
    this.openSnackBar('Volunteer Updated!', 'Cool!');
    this.router.navigate(['/volunteers']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    }
    );
  }

}
