//import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { UserName } from 'src/app/models/name';
import { initialUserState, UserState } from '../state/name.state';
import * as fromName from '../actions/name.action';

export const nameReducer = (
    state = initialUserState, 
    action: fromName.NameAction ) : UserState =>{
    switch (action.type) {
      // case fromName.LOAD_USER_NAME:{
      //   return {
      //       ...state, 
   
      //   };
      // }
      case fromName.LOAD_USER_NAME_SUCCESS:{
        return {
            ...state, 
            users: action.payload
      
        };
      }
        
      default:
        return state;
    }
  }


//   export interface UserState {
//     data: UserName[],
//     loaded: boolean,

// };
//   export const initialState : UserState = {
//       data:[],
//       loaded: false,

//   };

