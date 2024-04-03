import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpaceXApiService } from '../network/space-xapi.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  providers: [SpaceXApiService, HttpClient],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissionDetailsComponent implements OnInit {
  mission: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spaceXApiService: SpaceXApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const flightNumber = params.get('flight_number');
      if (flightNumber) {
        this.spaceXApiService.getLaunchDetails(flightNumber).subscribe(
          data => this.mission = data,
          error => console.error(error)
        );
      }
    });
  }
}