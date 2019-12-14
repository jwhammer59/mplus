import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EventsService } from './../../services/events.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  id: string;
  event: Event;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID from URL
    this.id = this.route.snapshot.params['id'];
    // Get Event
    this.eventsService.getEvent(this.id).subscribe(event => {
      if(event == null) {
        alert('No Events');
      }
      this.event = event
    })
  }

}
