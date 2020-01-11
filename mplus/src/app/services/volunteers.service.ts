import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, noop } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Volunteer } from '../models/Volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  private volunteersCollection: AngularFirestoreCollection<Volunteer>;
  private volunteerDoc: AngularFirestoreDocument<Volunteer>;
  private volunteers: Observable<Volunteer[]>;
  private volunteer: Observable<Volunteer>;
  
  cantors: Observable<any>;
  lectors: Observable<any>;
  ushers: Observable<any>;
  servers: Observable<any>;
  emohcs: Observable<any>;
  techs: Observable<any>;
  rosarys: Observable<any>;
  others: Observable<any>;
  gifts: Observable<any>;
  giftschildren: Observable<any>;
  masscords: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.volunteersCollection = afs.collection<Volunteer>('volunteers');
   }

   getVolunteers(): Observable<Volunteer[]> {
     this.volunteers = this.volunteersCollection
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Volunteer;
          const id = a.payload.doc.id;
          return { id, ...data};
        }))
      );
      return this.volunteers;
   }

   getVolunteer(id: string): Observable<Volunteer> {
    this.volunteerDoc = this.afs.doc<Volunteer>(`volunteers/${id}`);
    this.volunteer = this.volunteerDoc
      .snapshotChanges()
      .pipe(
        map(actions => {
          if(actions.payload.exists === false) {
            return null;
          } else {
            const data = actions.payload.data() as Volunteer;
            data.id = actions.payload.id;
            return data;
          }
        }))
      return this.volunteer;
   }

   addVolunteer(volunteer: Volunteer) {
     this.volunteersCollection.add(volunteer);
   }

   updateVolunteer(volunteer: Volunteer) {
     this.volunteerDoc = this.afs.doc(`volunteers/${volunteer.id}`);
     this.volunteerDoc.update(volunteer);
   }

   deleteVolunteer(volunteer: Volunteer) {
     this.volunteerDoc = this.afs.doc(`volunteers/${volunteer.id}`);
     this.volunteerDoc.delete();
   }


   getCantors(): Observable<Volunteer[]> {
    this.cantors = this.afs
      .collection('volunteers', ref => ref
      .where('isCantor', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

      return this.cantors;
   }

   getLectors(): Observable<Volunteer[]> {
    this.lectors = this.afs
    .collection('volunteers', ref => ref.where('isLector', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.lectors;
  }

  getUshers(): Observable<Volunteer[]> {
    this.ushers = this.afs
    .collection('volunteers', ref => ref.where('isUsher', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.ushers;
  }

  getServers(): Observable<Volunteer[]> {
    this.servers = this.afs
    .collection('volunteers', ref => ref.where('isServer', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.servers;
  }

  getEMoHCs(): Observable<Volunteer[]> {
    this.emohcs = this.afs
    .collection('volunteers', ref => ref.where('isEMoHC', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.emohcs;
  }

  getTechs(): Observable<Volunteer[]> {
    this.techs = this.afs
    .collection('volunteers', ref => ref.where('isTech', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.techs;
  }

  getRosarys(): Observable<Volunteer[]> {
    this.rosarys = this.afs
      .collection('volunteers', ref => ref.where('isRosary', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

      return this.rosarys;
  }

  getOthers(): Observable<Volunteer[]> {
    this.others = this.afs
    .collection('volunteers', ref => ref.where('isOther', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.others;
  }

  getGifts(): Observable<Volunteer[]> {
    this.gifts = this.afs
    .collection('volunteers', ref => ref.where('isGifts', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.gifts;
  }

  getGiftsChildren(): Observable<Volunteer[]> {
    this.giftschildren = this.afs
    .collection('volunteers', ref => ref.where('isGiftsChild', '==', true)
    .where('isAvailable', '==', true))
    .valueChanges();

    return this.giftschildren;
  }

  getMassCords(): Observable<Volunteer[]> {
    this.masscords = this.afs
      .collection('volunteers', ref => ref.where('isMassCord', '==', true)
      .where('isAvailable', '==', true))
      .valueChanges();

      return this.masscords;
  }
   
}
  