import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { UserState } from '../state/name.state';

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: UserState) => {
    console.log(state)
    state.users}
);



