import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../components/home/home.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { EventComponent } from '../components/event/event.component';
import { AddEventComponent } from '../components/add-event/add-event.component';
import { EditEventComponent } from './../components/edit-event/edit-event.component';
import { EventDetailComponent } from './../components/event-detail/event-detail.component';
import { VolunteerComponent } from './../components/volunteer/volunteer.component';
import { AddVolunteerComponent } from './../components/add-volunteer/add-volunteer.component';
import { EditVolunteerComponent } from './../components/edit-volunteer/edit-volunteer.component';
import { VolunteerDetailComponent } from './../components/volunteer-detail/volunteer-detail.component';
import { LoginComponent } from './../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AboutComponent } from './../components/about/about.component';
import { ContactUsComponent } from './../components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';

import { AuthGuard } from '../guards/authguard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'events', component: EventComponent, canActivate:[AuthGuard]},
  {path: 'event-details/:id', component: EventDetailComponent, canActivate:[AuthGuard]},
  {path: 'add-event', component: AddEventComponent, canActivate:[AuthGuard]},
  {path: 'edit-event/:id', component: EditEventComponent, canActivate:[AuthGuard]},
  {path: 'volunteers', component: VolunteerComponent, canActivate:[AuthGuard]},
  {path: 'volunteer-details/:id', component: VolunteerDetailComponent, canActivate:[AuthGuard]},
  {path: 'add-volunteer', component: AddVolunteerComponent, canActivate:[AuthGuard]},
  {path: 'edit-volunteer/:id', component: EditVolunteerComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
