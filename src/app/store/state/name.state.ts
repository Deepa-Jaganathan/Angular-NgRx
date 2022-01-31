import { UserName } from '../../models/name';

export interface UserState {
  users: UserName[];
}

export const initialUserState: UserState = {
    users: null,
  };