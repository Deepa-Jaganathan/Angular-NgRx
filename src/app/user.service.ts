import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserName } from './models/name';



@Injectable()
export class UserService {


  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get('api/states/getState');
  }
}