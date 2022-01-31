import { UserAlbum, UserAlbumTitle } from "../../models/user-album";
import { get, sortBy } from "lodash-es";
import { ElementRef, Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserAlbumEntity } from "./mfa-entity";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { UserAlbumResponseModel } from "./mfa.model";
import { MfaMapper } from "./mfa.repository.mapper";
import { MfaRepositoryBase } from "./mfa.repository.base";

@Injectable({
  providedIn: "root",
})
export class MfaRepository extends MfaRepositoryBase {
  mapper = new MfaMapper();
  constructor(private http: HttpClient) {
    super();
  }

  getUserAlbums(): Observable<UserAlbumResponseModel> {
    const url = "https://jsonplaceholder.typicode.com/albums";

    return this.http
      .get<UserAlbumEntity[]>(url)
      .pipe(map((response) => this.mapper.mapFrom(response)));
  }
}

// if the api is post method
//payload is requestbody
// getUserAlbums(payload: ResquestModel): Observable<ResponseModel> {
//     const url = "https://jsonplaceholder.typicode.com/albums";
//     return this.http
//       .post<UserAlbumEntity>(url, payload)
//       .pipe(map((response) => this.mapper.mapFrom(response)));
//   }

///Example for view child and on focus
// @ViewChild('otpInput', { static: false }) otpInputElement: ElementRef;

// setFocusOnOtp() {
//   const otpInputElement = this.otpInputElement?.nativeElement;
//   if(otpInputElement) {
//     setTimeout(() => {
//       otpInputElement.focus();
//     })
//   }
// }
