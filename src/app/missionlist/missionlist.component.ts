import { Component, OnInit } from '@angular/core';
import { SpaceXApiService} from '../network/space-xapi.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  availableYears: string[] = [
    '2006', '2007', '2008', '2009', '2010', 
    '2011', '2012', '2013', '2014', '2015', 
    '2016', '2017', '2018', '2019', '2020', 
    '2021', '2022', '2023', '2024'
  ];  
  selectedYear: string = '';

  constructor(private spaceXApiService: SpaceXApiService) {}

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches(): void {
    this.spaceXApiService.getLaunches().subscribe(
      data => this.missions = data,
      error => console.error(error)
    );
  }

  updateLaunchesByYear(year: string): void {
    this.spaceXApiService.getLaunchesByYear(year).subscribe(
      data => this.missions = data,
      error => console.error(error)
    );
  }

  onYearChange(newYear: string): void {
    this.selectedYear = newYear;
    this.updateLaunchesByYear(newYear);
  }
}
