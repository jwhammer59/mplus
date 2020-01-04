import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EventsService } from './../../services/events.service';
import { Event } from '../../models/Event';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventEditForm: FormGroup;
  event: Observable<Event>;
  id: string;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.eventEditForm = this.fb.group({
      id: '',
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

    this.event = this.eventsService.getEvent(this.id).pipe(
      tap(event => this.eventEditForm.patchValue(event))
    );
  }

  onSubmit({value}: {value: Event}) {
    this.eventsService.updateEvent(value);
    this.openSnackBar('Event Updated!', 'Cool')
    this.router.navigate(['/events']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
