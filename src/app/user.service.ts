import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserName } from './models/name';
import { environment } from 'src/environments/environment';



@Injectable()
export class UserService {


  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get('api/states/getState');
    // return this.http.get('https://node-api-point.herokuapp.com/states/getState');
  }
}