import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Event } from '../../models/Event';
import { EventsService } from './../../services/events.service';
import { DeleteEventComponent } from '../dialogs/delete-event/delete-event.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  id: string;
  event: Event;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.eventsService.getEvent(this.id).subscribe(event => {
      this.event = event;
      // console.log(this.event);
    })
  }
  
  onDeleteClicked(item) {
    const dialogRef = this.dialog.open(DeleteEventComponent, {
      width: '250px',
      data: {name: this.event.evtType, owner: this.event.evtDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) {
        dialogRef.close();
        return;
      } else {
      this.eventsService.deleteEvent(this.event);
      console.log(result);
  }});
    this.router.navigate(['/events']);
  }

}
