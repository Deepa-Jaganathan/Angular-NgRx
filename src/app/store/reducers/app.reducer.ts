import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { nameReducer } from './name.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: nameReducer,
 
};