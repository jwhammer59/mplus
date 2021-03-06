import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Event } from '../../models/Event';
import { EventsService } from '../../services/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { VolunteersService } from '../../services/volunteers.service';
// import { ValidateEvent } from '../../common/validators/event-item-required';

import { IncompleteEventComponent } from './../dialogs/incomplete-event/incomplete-event.component';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;
  prBarCounter: number = 0;
  eventFull: boolean = false;
  incompleteEventApproval: boolean = false;

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
    private volunteersService: VolunteersService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
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
        evtOther: ['',],
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
    this.onlyCantors = this.volunteersService.getCantors();
    this.onlyLectors = this.volunteersService.getLectors();
    this.onlyServers = this.volunteersService.getServers();
    this.onlyUshers = this.volunteersService.getUshers();
    this.onlyGifts = this.volunteersService.getGifts();
    this.onlyGiftsChildren = this.volunteersService.getGiftsChildren();
    this.onlyRosarys = this.volunteersService.getRosarys();
    this.onlyOthers = this.volunteersService.getOthers();
    this.onlyTechs = this.volunteersService.getTechs();
    this.onlyEMoHCs = this.volunteersService.getEMoHCs();
    this.onlyMassCords = this.volunteersService.getMassCords();
  }

  weekendOnlyFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5;
  }

  get f() {return this.eventForm.controls;}

  checkStaffingLevel() {
    this.prBarCounter = 0;
    if(this.f.evtCantor.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtCantor.value !== '' && this.f.evtType.value === 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtLector1.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtLector1.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtLector2.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtLector2.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtEMoHC1.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtEMoHC1.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtEMoHC2.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtEMoHC2.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtEMoHC3.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtEMoHC3.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtEMoHC4.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtEMoHC5.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtEMoHC6.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtEMoHC7.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtGifts.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtGifts.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtGiftsChild.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtServer1.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtServer1.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtServer2.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtServer2.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtServer3.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtUsher1.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtUsher1.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtUsher2.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    } else if (this.f.evtUsher2.value !== '' && this.f.evtType.value === 'Sunday - Early'){
      this.prBarCounter = this.prBarCounter + 9.1;
    }

    if(this.f.evtUsher3.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtUsher4.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtUsher5.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtMassCord.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtRosary1.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtRosary2.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtTech1.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.f.evtTech2.value !== '' && this.f.evtType.value !== 'Sunday - Early') {
      this.prBarCounter = this.prBarCounter + 4;
    }

    if(this.prBarCounter >= 100) {
      this.prBarCounter = 100;
      this.eventFull = true;
      this.eventForm.controls['evtIsFull'].patchValue(true);
    }  
  }

  onSubmit({value}: {value: Event}) {
    this.checkStaffingLevel();

    if(this.prBarCounter < 100 && !this.incompleteEventApproval) {
      this.eventFull = false;
      this.eventForm.controls['evtIsFull'].patchValue(false);
      console.log(this.incompleteEventApproval);
      
      const dialogRef = this.dialog.open(IncompleteEventComponent, {
        width: '350px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if(!result) {
          dialogRef.close();
          return;
        }
      });
      return;
    } else {
      this.eventFull = false;
      this.eventForm.controls['evtIsFull'].patchValue(false);
    }
      this.eventsService.addEvent(value);
      this.openSnackBar('Event Added!', 'Awesome!')
      this.router.navigate(['/events']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
