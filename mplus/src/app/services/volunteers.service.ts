import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Volunteer } from '../common/Volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  private volunteersCollection: AngularFirestoreCollection<Volunteer>;
  private volunteers: Observable<Volunteer[]>;


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
}
