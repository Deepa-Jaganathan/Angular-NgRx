import { 
BehaviorSubject,
interval,
Observable,
of,
Subject,
Subscription,
} from 'rxjs';
import { take } from 'rxjs/operators';
import * as moment from 'moment';
import { isNil } from 'lodash-es';

export class CountdownTimer {
    /**
     * returns total number of seconds
     */

 readonly totalSeconds: number;
 private _timeInternal$: Observable<number>;
 private _timerSubscription$: Subscription;
 private _remainingTime$: Subject<string>;

 /**
  * Construct a countdown timer
  *  @param minutes - minutes to countdown
  *  @param seconds - seconds to countdown; defaults to zero
  *  @param onComplete - function to call once the countdown is complete; default to a noop
  *  @param displayFormat - display format string
  */

  constructor(
      public readonly minutes: number,
      public readonly seconds: number = 0,
      public readonly onComplete: () => void = () => {}, 
      public readonly displayFormat = 'mm:ss',

  ) {
   this.totalSeconds = this.minutes * 60 + this.seconds;
   this._remainingTime$ = new BehaviorSubject<string>(
       moment.utc(this.totalSeconds * 1000).format(this.displayFormat)
   );
  }

  /**
   * emits the string every second to count down the remaining time in mm:ss
   */

   get remainingTime(): Observable<string> {
       return this._remainingTime$.asObservable() || of('CALL START METHOD FIRST');
   }

  /**
   * Starts the timer
   */

   start(): void {
       this._timeInternal$ = interval(1000).pipe(take(this.totalSeconds));
       this._timerSubscription$ = this._timeInternal$.subscribe(
           (elapsed) => 
           this._remainingTime$.next(
             moment
               .utc((this.totalSeconds - elapsed) * 1000)
               .format(this.displayFormat)
           ),
           () => {},
           () => this.onComplete()
         );
       
    }

   /**
   * Stop the timer
   */

   stop(): void {
     if(!isNil(this._timerSubscription$) && !this._timerSubscription$.closed) {
        this._timerSubscription$.unsubscribe();
     }
   }

   
}
