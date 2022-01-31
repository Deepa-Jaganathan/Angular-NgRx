import { Action } from '@ngrx/store';
import { UserName } from 'src/app/models/name';

export const LOAD_USER_NAME = '[Users] Load Users';
export const LOAD_USER_NAME_SUCCESS = '[Users] Load Users Success';


// export function getName(): Action<void> {
//     return {
//         type: ALL_USER_NAME;
//     }
// }

export class getName implements Action {
    public readonly type = LOAD_USER_NAME;
    //constructor(public payload: UserName[]) {}
  }


export class successName implements Action {
    public readonly type = LOAD_USER_NAME_SUCCESS;
    constructor(public payload: UserName[]) {}
  }

export type NameAction = getName | successName;


