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
  event: Event = {
    evtType: '',
    evtDate: '',
    evtIsFull: false,
    evtCantor: '',
    evtLector1: '',
    evtLector2: '',
    evtEMoHC1: '',
    evtEMoHC2: '',
    evtEMoHC3: '',
    evtEMoHC4: '',
    evtEMoHC5: '',
    evtEMoHC6: '',
    evtEMoHC7: '',
    evtGifts: '',
    evtGiftsChild: '',
    evtRosary1: '',
    evtRosary2: '',
    evtOther: '',
    evtUsher1: '',
    evtUsher2: '',
    evtUsher3: '',
    evtUsher4: '',
    evtUsher5: '',
    evtUsher6: '',
    evtTech1: '',
    evtTech2: '',
    evtServer1: '',
    evtServer3: '',
    evtServer2: '',
  };

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
    })
  }
  
  onDeleteClicked(item) {
    const dialogRef = this.dialog.open(DeleteEventComponent, {
      width: '250px',
      data: {type: this.event.evtType, date: this.event.evtDate}
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
