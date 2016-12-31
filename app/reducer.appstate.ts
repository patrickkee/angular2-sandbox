// The "appState" reducer performs actions on our application state
import {Action} from '@ngrx/store';
import {AppStore} from './interface.appstore';
import { createSelector } from 'reselect';

var defaultState = <AppStore>{id: 0,
															item: "default",
															item2: {value: "default2"},
															interactiveMode: false}

export const appState = (state: AppStore = defaultState, action: Action) => {
  switch (action.type) {
  	case 'ADD_ITEM': 
  		return <AppStore>{id: state.id+1, item: action.payload.item, 
  											interactiveMode: state.interactiveMode, item2: state.item2 };
  	case 'ADD_ITEM2': 
  		return <AppStore>{id: state.id, item: state.item, 
  											interactiveMode: state.interactiveMode, item2: {value: action.payload.item} };
    case 'TOGGLE_INTERACTIVE': 
  		return <AppStore>{id: state.id, item: state.item, interactiveMode: !state.interactiveMode, item2: state.item2 };
    default:
      return state;
  }
};


export const getItemValue = (state: any) => state.appState.item;


export const getItem2 = (state: any) => state.appState.item2;
export const getItem2Value = createSelector(getItem2, (state: any) => state.value);
export const getInteractiveMode = (state: any) => state.appState.interactiveMode;