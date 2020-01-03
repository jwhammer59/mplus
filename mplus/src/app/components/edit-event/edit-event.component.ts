import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { EventsService } from './../../services/events.service';
import { Event } from '../../models/Event';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.eventsService.getEvent(this.id).subscribe(event => {
      this.event = event});
  }

  onEditFormFill() {
    this.eventEditForm.get('id').setValue(this.event.id);
    this.eventEditForm.get('evtType').setValue(this.event.evtType);
    this.eventEditForm.get('evtDate').setValue(this.event.evtDate);
    this.eventEditForm.get('evtIsFull').setValue(this.event.evtIsFull);
    this.eventEditForm.get('evtCantor').setValue(this.event.evtCantor);
    this.eventEditForm.get('evtEMoHC1').setValue(this.event.evtEMoHC1);
    this.eventEditForm.get('evtEMoHC2').setValue(this.event.evtEMoHC2);
    this.eventEditForm.get('evtEMoHC3').setValue(this.event.evtEMoHC3);
    this.eventEditForm.get('evtEMoHC4').setValue(this.event.evtEMoHC4);
    this.eventEditForm.get('evtEMoHC5').setValue(this.event.evtEMoHC5);
    this.eventEditForm.get('evtEMoHC6').setValue(this.event.evtEMoHC6);
    this.eventEditForm.get('evtEMoHC7').setValue(this.event.evtEMoHC7);
    this.eventEditForm.get('evtGifts').setValue(this.event.evtGifts);
    this.eventEditForm.get('evtGiftsChild').setValue(this.event.evtGiftsChild);
    this.eventEditForm.get('evtLector1').setValue(this.event.evtLector1);
    this.eventEditForm.get('evtLector2').setValue(this.event.evtLector2);
    this.eventEditForm.get('evtOther').setValue(this.event.evtOther);
    this.eventEditForm.get('evtRosary1').setValue(this.event.evtRosary1);
    this.eventEditForm.get('evtRosary2').setValue(this.event.evtRosary2);
    this.eventEditForm.get('evtServer1').setValue(this.event.evtServer1);
    this.eventEditForm.get('evtServer2').setValue(this.event.evtServer2);
    this.eventEditForm.get('evtServer3').setValue(this.event.evtServer3);
    this.eventEditForm.get('evtTech1').setValue(this.event.evtTech1);
    this.eventEditForm.get('evtTech2').setValue(this.event.evtTech2);
    this.eventEditForm.get('evtUsher1').setValue(this.event.evtUsher1);
    this.eventEditForm.get('evtUsher2').setValue(this.event.evtUsher2);
    this.eventEditForm.get('evtUsher3').setValue(this.event.evtUsher3);
    this.eventEditForm.get('evtUsher4').setValue(this.event.evtUsher4);
    this.eventEditForm.get('evtUsher5').setValue(this.event.evtUsher5);
    this.eventEditForm.get('evtUsher6').setValue(this.event.evtUsher6);
    console.log(this.event);
  }

  eventEditForm = this.fb.group({
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

  onSubmit({value}: {value: Event}) {
    this.eventsService.updateEvent(value);
    this.openSnackBar('Event Updated!', 'Cool')
    this.router.navigate(['/events']);
    console.log(value);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
