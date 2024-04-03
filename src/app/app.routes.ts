import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionListComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    { path: 'missions', component: MissionListComponent },
    { path: '', redirectTo: '/missions', pathMatch: 'full' }
  ];

@NgModule({
    declarations: [
      // ... your components
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      // ... other modules
    ],
    providers: [],
    bootstrap: [/* your root component */]
})

export class AppModule { }