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
  private vCantors: Observable<Volunteer[]>;

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
   
   
   
  }
  
  // getCantors(): Observable<Volunteer[]> {
  //   this.vCantors = this.volunteersCollection
  //     .valueChanges()
  //     .pipe(
  //       map(cantors => cantors
  //         .filter(cantor => cantor.isCantor == true))
  //     )
  //     return this.vCantors;
  // }

  
  // getCantors(): Observable<Volunteer[]> {
  //   this.volunteers = this.volunteersCollection
  //   .snapshotChanges()
  //   .pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Volunteer;
  //       const id = a.payload.doc.id;
  //       return { id, ...data};
  //     }))
  //   );
  //   return this.volunteers;
  // }
  
  // map(items => items.filter(item => item.attending)),
  //       filter(items => items && items.length > 0)