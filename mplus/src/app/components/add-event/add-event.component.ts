import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../../services/events.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = {
    evtType: '',
    evtDate: '',
    evtIsFull: false
  }

  @ViewChild('eventForm', {static: false}) form: any;

  constructor(
    private eventsService: EventsService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit({value}: {value: Event}) {
    this.eventsService.addEvent(value);
    this.router.navigate(['/event']);
    console.log(value);
  }

}
