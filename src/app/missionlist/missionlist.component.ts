import { Component, OnInit } from '@angular/core';
import { SpaceXApiService} from '../network/space-xapi.service';
import { Mission } from '../model/mission';
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

  constructor(private spaceXApiService: SpaceXApiService) {}

  ngOnInit() {
    this.spaceXApiService.getLaunches().subscribe(data => {
      this.missions = data;
    });
  }
}
