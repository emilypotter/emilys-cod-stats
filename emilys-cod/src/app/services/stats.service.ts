import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  public getStats(): any {
    // return this.http.get<any>('http://localhost:3000/users/stats');
    return this.http.get<any>('users/stats');
  }

}
