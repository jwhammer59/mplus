import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Event } from '../../models/Event';
import { EventsService } from '../../services/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Volunteer } from '../../models/Volunteer';
import { VolunteersService } from '../../services/volunteers.service';
import { Observable, pipe } from 'rxjs';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;
  volunteers: Observable<Volunteer[]>;

  onlyCantors: Observable<any>;
  onlyLectors: Observable<any>;
  onlyEMoHCs: Observable<any>;
  onlyServers: Observable<any>;
  onlyGifts: Observable<any>;
  onlyGiftsChildren: Observable<any>;
  onlyTechs: Observable<any>;
  onlyUshers: Observable<any>;
  onlyRosarys: Observable<any>;
  onlyOthers: Observable<any>;

  constructor(
    private eventsService: EventsService,
    private volunteersService: VolunteersService,
    private afs: AngularFirestore,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
    ) {

      this.eventForm = this.fb.group({
        evtType: ['', Validators.required],
        evtDate: [new Date(), Validators.required],
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

  ngOnInit() {
    this.onlyCantors = this.afs
      .collection('volunteers', ref => ref
      .where('isCantor', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyLectors = this.afs
      .collection('volunteers', ref => ref.where('isLector', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyEMoHCs = this.afs
      .collection('volunteers', ref => ref.where('isEMoHC', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyGifts = this.afs
      .collection('volunteers', ref => ref.where('isGifts', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyGiftsChildren = this.afs
      .collection('volunteers', ref => ref.where('isGiftsChild', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyTechs = this.afs
      .collection('volunteers', ref => ref.where('isTech', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyRosarys = this.afs
      .collection('volunteers', ref => ref.where('isRosary', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyUshers = this.afs
      .collection('volunteers', ref => ref.where('isUsher', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();
    
    this.onlyOthers = this.afs
      .collection('volunteers', ref => ref.where('isOther', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

    this.onlyServers = this.afs
      .collection('volunteers', ref => ref.where('isServer', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();
  }

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
