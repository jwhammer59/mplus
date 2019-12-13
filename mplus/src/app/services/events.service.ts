import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsCollection: AngularFirestoreCollection<Event>;
  private events: Observable<Event[]>;


  constructor(private afs: AngularFirestore) {
    this.eventsCollection = afs.collection<Event>('events');
   }

   getEvents(): Observable<Event[]> {
     this.events = this.eventsCollection
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Event;
          const id = a.payload.doc.id;
          return { id, ...data};
        }))
      );
      return this.events;
   }
}
