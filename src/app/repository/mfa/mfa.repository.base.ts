import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserAlbumResponseModel } from "./mfa.model";

@Injectable({
  providedIn: "root",
})
export abstract class MfaRepositoryBase {
  abstract getUserAlbums(): Observable<UserAlbumResponseModel>;
}

//if the api call is post
//abstract getUserAlbums(payload: requestModel): Observable<UserAlbumResponseModel>;
