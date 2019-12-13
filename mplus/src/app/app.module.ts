import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvtTableComponent } from './components/evt-table/evt-table.component';
import { VolTableComponent } from './components/vol-table/vol-table.component';
import { EventComponent } from './components/event/event.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    DashboardComponent,
    EvtTableComponent,
    VolTableComponent,
    EventComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
