import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any> {
    return this.http.get(`${this.apiUrl}`) 
  }

  getLaunchesByYear(year: string): Observable<any> {
    const url = `${this.apiUrl}?launch_year=${year}`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        throw new Error('Error in getting launches by year: ' + error.message);
      })
    );
  }

  getLaunchDetails(flightNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${flightNumber}`);
  }
}
