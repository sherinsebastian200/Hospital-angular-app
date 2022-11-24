import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalEntryComponent } from './hospital-entry/hospital-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { RouterModule } from '@angular/router';
import { PatientViewComponent } from './patient-view/patient-view.component';
const myRoute:Routes=[
  {
    path:"",
    Component:HospitalEntryComponent

  }

  {
    path:"search",
    Component:PatientSearchComponent
  }

  {
    path:"delete",
    Component:PatientDeleteComponent
  
  }
  {
    path:"view"
    Component:PatientViewComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HospitalEntryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
