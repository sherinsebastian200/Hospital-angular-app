import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalEntryComponent } from './hospital-entry/hospital-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalEntryComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
