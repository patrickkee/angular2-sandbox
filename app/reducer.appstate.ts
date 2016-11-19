// The "appState" reducer performs actions on our application state
import {Action} from '@ngrx/store';

export const appState = (state: string = "default", action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
    	return action.payload.item;
    default:
      return state;
  }
};