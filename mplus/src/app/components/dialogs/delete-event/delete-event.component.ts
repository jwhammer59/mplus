import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Event } from '../../../models/Event';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  deleteEvent: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DeleteEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private _snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close(this.deleteEvent);
  }

  onDeleteClick() {
    this.openSnackBar('Event Deleted!', 'Goodbye!');
    console.log('Dialog Delete Btn Clicked');
    this.deleteEvent = true;
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    }
    );
  }

}
