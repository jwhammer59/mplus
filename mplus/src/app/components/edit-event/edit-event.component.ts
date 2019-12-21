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
  };

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

  onSubmit({value}: {value: Event}) {
    // this.eventsService.addEvent(value);
    // this.router.navigate(['/event']);
    console.log(value);
  }

}
