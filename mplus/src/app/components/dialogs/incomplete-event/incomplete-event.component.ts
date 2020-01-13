import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-incomplete-event',
  templateUrl: './incomplete-event.component.html',
  styleUrls: ['./incomplete-event.component.css']
})
export class IncompleteEventComponent {

  incompleteEvent: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<IncompleteEventComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close(this.incompleteEvent);
  }

}
