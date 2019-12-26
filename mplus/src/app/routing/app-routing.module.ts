import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './../components/about/about.component';
import { ContactUsComponent } from './../components/contact-us/contact-us.component';
import { HomeComponent } from './../components/home/home.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { EventComponent } from '../components/event/event.component';
import { AddEventComponent } from '../components/add-event/add-event.component';
import { EditEventComponent } from './../components/edit-event/edit-event.component';
import { VolunteerComponent } from './../components/volunteer/volunteer.component';
import { AddVolunteerComponent } from './../components/add-volunteer/add-volunteer.component';
import { EditVolunteerComponent } from './../components/edit-volunteer/edit-volunteer.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { EventDetailComponent } from './../components/event-detail/event-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'events', component: EventComponent},
  {path: 'event-details/:id', component: EventDetailComponent},
  {path: 'add-event', component: AddEventComponent},
  {path: 'edit-event/:id', component: EditEventComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'add-volunteer', component: AddVolunteerComponent},
  {path: 'edit-volunteer/:id', component: EditVolunteerComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
