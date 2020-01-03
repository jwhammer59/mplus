import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

      this.eventForm = this.fb.group({
        evtType: ['', Validators.required],
        evtDate: ['', Validators.required],
        evtIsFull: [false, Validators.required],
        evtCantor: ['', Validators.required],
        evtEMoHC1: ['', Validators.required],
        evtEMoHC2: ['', Validators.required],
        evtEMoHC3: ['', Validators.required],
        evtEMoHC4: ['', Validators.required],
        evtEMoHC5: ['', Validators.required],
        evtEMoHC6: ['', Validators.required],
        evtEMoHC7: ['', Validators.required],
        evtGifts: ['', Validators.required],
        evtGiftsChild: ['', Validators.required],
        evtLector1: ['', Validators.required],
        evtLector2: ['', Validators.required],
        evtOther: ['', Validators.required],
        evtRosary1: ['', Validators.required],
        evtRosary2: ['', Validators.required],
        evtServer1: ['', Validators.required],
        evtServer2: ['', Validators.required],
        evtServer3: ['', Validators.required],
        evtTech1: ['', Validators.required],
        evtTech2: ['', Validators.required],
        evtUsher1: ['', Validators.required],
        evtUsher2: ['', Validators.required],
        evtUsher3: ['', Validators.required],
        evtUsher4: ['', Validators.required],
        evtUsher5: ['', Validators.required],
        evtUsher6: ['', Validators.required]
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
