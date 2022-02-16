import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, withLatestFrom, mapTo, tap } from 'rxjs/operators';
import { LOAD_USER_NAME, getName, successName } from '../actions/name.action';
import { Action } from '@ngrx/store';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { UserService } from 'src/app/user.service';
import { UserName } from 'src/app/models/name';


@Injectable()
export class UserEffects {
        @Effect()
        getUser$ = this._actions$.pipe(
          ofType<getName>(LOAD_USER_NAME),
          switchMap(() => this.userService.getStates()),
          switchMap((config: UserName[]) => {
            return of(new successName(config));
          })
          );

  constructor(
    private _actions$: Actions,
    private userService: UserService
  ) {}
}


