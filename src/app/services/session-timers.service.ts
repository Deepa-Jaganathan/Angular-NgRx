import { Injectable } from "@angular/core";
import { CountdownTimer } from "../utils/countdown-timer";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Actions } from "@ngrx/effects";

@Injectable()
export class SessionTimers {
  /**
   * Counter for session expire warning
   *
   */
  private _warningTimer: CountdownTimer;
  /**
   * Counter for session expiry
   *
   */
  private _lengthTimer: CountdownTimer;
  /**
   * Flag to indicate if the countdown should be displayed
   *
   */
  displayCounter: boolean;

  constructor() {
    this.displayCounter = false;
    this._warningTimer = new CountdownTimer(
      environment.sessionConfig.warningAt,
      0,
      () => {
        this.displayCounter = true;
        console.log(this.displayCounter);
        // this.store.dispatch(new sessionAboutToExpire());
      }
    );
    this._lengthTimer = new CountdownTimer(
      environment.sessionConfig.warningAt,
      0,
      () => {
        this.displayCounter = true;
        console.log(this.displayCounter);
      }
    );
  }

  /**
   * remaining time in the session
   */

  get remainingTime$(): Observable<string> {
    return this._lengthTimer.remainingTime;
  }
}
