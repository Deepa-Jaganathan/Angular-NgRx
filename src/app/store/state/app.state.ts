import { RouterReducerState } from '@ngrx/router-store';

import { initialUserState, UserState } from './name.state';



export interface IAppState {
  router?: RouterReducerState;
  users: UserState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}