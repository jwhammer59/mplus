import { EditEventComponent } from './../components/edit-event/edit-event.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './../components/about/about.component';
import { ContactUsComponent } from './../components/contact-us/contact-us.component';
import { HomeComponent } from './../components/home/home.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { VolunteerComponent } from './../components/volunteer/volunteer.component';
import { EventComponent } from '../components/event/event.component';
import { AddEventComponent } from '../components/add-event/add-event.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'event', component: EventComponent},
  {path: 'add-event', component: AddEventComponent},
  {path: 'edit-event/:id', component: EditEventComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
