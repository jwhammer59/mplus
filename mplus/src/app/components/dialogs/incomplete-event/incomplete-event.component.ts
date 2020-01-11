import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-incomplete-event',
  templateUrl: './incomplete-event.component.html',
  styleUrls: ['./incomplete-event.component.css']
})
export class IncompleteEventComponent {

  incompleteEvent: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<IncompleteEventComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Event
  ) { }

  onNoClick(): void {
    this.dialogRef.close(this.incompleteEvent);
  }

}
