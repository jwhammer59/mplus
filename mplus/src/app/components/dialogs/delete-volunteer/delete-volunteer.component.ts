import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Volunteer } from '../../../models/Volunteer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-volunteer',
  templateUrl: './delete-volunteer.component.html',
  styleUrls: ['./delete-volunteer.component.css']
})
export class DeleteVolunteerComponent {
  deleteVolunteer: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DeleteVolunteerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Volunteer,
    private _snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close(this.deleteVolunteer);
  }

  onDeleteClick() {
    this.openSnackBar('Volunteer Deleted!', 'Goodbye!');
    console.log('Dialog Delete Btn Clicked');
    this.deleteVolunteer = true;  
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    }
    );
  }

}
