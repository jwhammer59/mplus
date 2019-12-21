import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Volunteer } from './../../models/Volunteer';
import { VolunteersService } from './../../services/volunteers.service';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent implements OnInit {
  volunteer: Volunteer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isAvailable: false
  }

  constructor(
    private volunteersService: VolunteersService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit({value}: {value: Volunteer}) {
    this.volunteersService.addVolunteer(value);
    this.openSnackBar('Volunteer Added!', 'Cool!');
    this.router.navigate(['/volunteer']);
    console.log(value);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    }
    );
  }

}
