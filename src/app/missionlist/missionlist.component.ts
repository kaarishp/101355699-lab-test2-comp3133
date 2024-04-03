import { Component, OnInit } from '@angular/core';
import { SpaceXApiService} from '../network/space-xapi.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [SpaceXApiService, HttpClient]
})
export class MissionListComponent implements OnInit {
  missions: any[] = [];
  allMissions: any[] = [];
  availableYears: string[] = [
    '2006', '2007', '2008', '2009', '2010', 
    '2011', '2012', '2013', '2014', '2015', 
    '2016', '2017', '2018', '2019', '2020', 
  ];  
  selectedYear: string = '';

  constructor(private router: Router, private spaceXApiService: SpaceXApiService) {}

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches(): void {
    this.spaceXApiService.getLaunches().subscribe(
      data => {
        this.allMissions = data;
        this.missions = data;
      },
      error => console.error(error)
    );
  }

  updateLaunchesByYear(year: string): void {
    if (year) {
      this.missions = this.allMissions.filter(mission => mission.launch_year === year);
    } else {
      this.missions = [...this.allMissions]; // Reset to all missions if no year is selected
    }
  }

  onYearChange(newYear: string): void {
    this.selectedYear = newYear;
    this.updateLaunchesByYear(newYear);
  }

  filterLaunches(isSuccessful: boolean): void {
    this.missions = this.allMissions.filter(mission => mission.launch_success === isSuccessful);
  }
  
  selectMission(flightNumber: string): void {
    this.router.navigate(['/mission-details', flightNumber]);
  }
  
}
