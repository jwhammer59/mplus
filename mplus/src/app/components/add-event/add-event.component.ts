import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Event } from '../../models/Event';
import { EventsService } from '../../services/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
    ) {

      this.eventForm = new FormGroup({
        evtType: new FormControl(''),
        evtDate: new FormControl(new Date()),
        evtIsFull: new FormControl(false),
        evtCantor: new FormControl(''),
        evtEMoHC1: new FormControl(''),
        evtEMoHC2: new FormControl(''),
        evtEMoHC3: new FormControl(''),
        evtEMoHC4: new FormControl(''),
        evtEMoHC5: new FormControl(''),
        evtEMoHC6: new FormControl(''),
        evtEMoHC7: new FormControl(''),
        evtGifts: new FormControl(''),
        evtGiftsChild: new FormControl(''),
        evtLector1: new FormControl(''),
        evtLector2: new FormControl(''),
        evtOther: new FormControl(''),
        evtRosary1: new FormControl(''),
        evtRosary2: new FormControl(''),
        evtServer1: new FormControl(''),
        evtServer2: new FormControl(''),
        evtServer3: new FormControl(''),
        evtTech1: new FormControl(''),
        evtTech2: new FormControl(''),
        evtUsher1: new FormControl(''),
        evtUsher2: new FormControl(''),
        evtUsher3: new FormControl(''),
        evtUsher4: new FormControl(''),
        evtUsher5: new FormControl(''),
        evtUsher6: new FormControl('')
      });
     }

  ngOnInit() {}

  onSubmit({value}: {value: Event}) {
    this.eventsService.addEvent(value);
    this.openSnackBar('Event Added!', 'Awesome!')
    this.router.navigate(['/events']);
    console.log(value);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
