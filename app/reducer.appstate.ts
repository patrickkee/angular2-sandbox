// The "appState" reducer performs actions on our application state
import {Action} from '@ngrx/store';
import {AppStore} from './interface.appstore';

var defaultState = <AppStore>{id: 0,
															item: "default",
															interactiveMode: false}

export const appState = (state: AppStore = defaultState, action: Action) => {
  switch (action.type) {
  	case 'ADD_ITEM': 
  		return <AppStore>{id: state.id+1, item: action.payload.item, interactiveMode: state.interactiveMode};
    	 
    case 'TOGGLE_INTERACTIVE': 
  		return <AppStore>{id: state.id, item: state.item, interactiveMode: !state.interactiveMode};
    default:
      return state;
  }
};


export const getItemValue = (state: AppStore) => state.appState.item;
export const getInteractiveMode = (state: AppStore) => state.appState.interactiveMode;