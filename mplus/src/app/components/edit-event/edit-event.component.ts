import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EventsService } from './../../services/events.service';
import { Event } from '../../models/Event';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventEditForm: FormGroup;
  event: Observable<Event>;
  id: string;

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
  onlyMassCords: Observable<any>;

  constructor(
    private eventsService: EventsService,
    private afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
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
      evtMassCord: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.event = this.eventsService.getEvent(this.id)
      .pipe(
        tap(event => this.eventEditForm.patchValue(event))
    );

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

      this.onlyMassCords = this.afs
      .collection('volunteers', ref => ref.where('isMassCord', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

  }

  get f() {return this.eventEditForm.controls;}

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
