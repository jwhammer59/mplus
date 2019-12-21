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
  private eventDoc: AngularFirestoreDocument<Event>;
  private events: Observable<Event[]>;
  private event: Observable<Event>;

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

   getEvent(id: string): Observable<Event> {
    this.eventDoc = this.afs.doc<Event>(`events/${id}`);
    this.event = this.eventDoc
      .snapshotChanges()
      .pipe(
        map(actions => {
          if(actions.payload.exists === false) {
            return null;
          } else {
            const data = actions.payload.data() as Event;
            data.id = actions.payload.id;
            return data; 
          }
        })); 
        return this.event;   
   }

   addEvent(event: Event) {
    this.eventsCollection.add(event);
   }

   updateEvent(event: Event) {
    this.eventDoc = this.afs.doc(`events/${event.id}`);
    this.eventDoc.update(event);
  }
  
  deleteEvent(event: Event) {
    this.eventDoc = this.afs.doc(`events/${event.id}`);
    this.eventDoc.delete();
  }
}
