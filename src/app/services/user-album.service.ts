import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserAlbum, UserAlbumTitle } from '../models/user-album';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { UserAlbumCompleteTransformation, UserAlbumTitleTransformation, UserAlbumTransformation } from './transformation/user-album-transformation';



@Injectable({
    providedIn: 'root',
})
export class UserAlbumService {

  constructor(private router: Router, private http: HttpClient) { }

  public getUserAlbums(): Observable<UserAlbumTitle[]> {
    return this.http.get(`${environment.endpoints.todos}`).pipe(
      catchError((error)=>
        throwError(
            alert(error))
      ),
      map((response)=> UserAlbumCompleteTransformation(response))
    );
  }
}

// `${environment.endpoints.todos}`
//environment file can pass paramenter like below
//todos: 'https://jsonplaceholder.typicode.com/todos/:id',
// return this.http.get(environment.endpoints.todos.replace(':id', '1')).pipe(