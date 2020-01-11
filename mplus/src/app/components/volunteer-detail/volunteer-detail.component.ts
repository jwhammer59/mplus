import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Volunteer } from '../../models/Volunteer';
import { VolunteersService } from '../../services/volunteers.service';
import { DeleteVolunteerComponent } from '../dialogs/delete-volunteer/delete-volunteer.component';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.css']
})
export class VolunteerDetailComponent implements OnInit {
  id: string;
  volunteer: Volunteer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    isAvailable: false,
    isAdmin: false,
    isEMoHC: false,
    isCantor: false,
    isLector: false,
    isGifts: false,
    isGiftsChild: false,
    isServer: false,
    isTech: false,
    isOther: false,
    isUsher: false,
    isRosary: false,
    isMassCord: false
  }

  constructor(
    private volunteersService: VolunteersService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.volunteersService.getVolunteer(this.id).subscribe(volunteer => {
      this.volunteer = volunteer;
    })
  }

  onDeleteClicked(item) {
    const dialogRef = this.dialog.open(DeleteVolunteerComponent, {
      width: '250px',
      data: {firstName: this.volunteer.firstName, lastName: this.volunteer.lastName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) {
        dialogRef.close();
        return;
      } else {
      this.volunteersService.deleteVolunteer(this.volunteer);
      console.log(result);
  }});
    this.router.navigate(['/volunteers']);
  }

}
