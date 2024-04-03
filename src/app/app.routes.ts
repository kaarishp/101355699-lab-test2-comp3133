import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionListComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
    { path: 'missions', component: MissionListComponent },
    { path: 'mission-details/:flight_number', component: MissionDetailsComponent },
    { path: '', redirectTo: '/missions', pathMatch: 'full' }
  ];

@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: []
})

export class AppModule { }