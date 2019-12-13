import { Component, OnInit } from '@angular/core';

import { EventsService } from './../../services/events.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[];
  event: Event;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(events => this.events = events);
  }

}
