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
    evtIsFull: false,
    evtCantor: '',
    evtEMoHC1: '',
    evtEMoHC2: '',
    evtEMoHC3: '',
    evtEMoHC4: '',
    evtEMoHC5: '',
    evtEMoHC6: '',
    evtEMoHC7: '',
    evtGifts: '',
    evtGiftsChild: '',
    evtLector1: '',
    evtLector2: '',
    evtOther: '',
    evtRosary1: '',
    evtRosary2: '',
    evtServer1: '',
    evtServer2: '',
    evtServer3: '',
    evtTech1: '',
    evtTech2: '',
    evtUsher1: '',
    evtUsher2: '',
    evtUsher3: '',
    evtUsher4: '',
    evtUsher5: '',
    evtUsher6: ''
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
