import { Component, ElementRef } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './interface.appstore';
import { getItemValue, getItemValue2, getInteractiveMode } from './reducer.appstate';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular!</h1>
    	<p>Application Context Foo Value: <strong>{{appCtxt.foo}}</strong></p>
    	<child [appStore]="_appState | async" [itemValue]="_itemValue | async"></child>
    	<child2 [itemValue2]="_itemValue2 | async"></child2>
		  <p>ItemValue selector Value: {{(_itemValue | async)}}</p>

    	<br/><br/>
	    <button (click)="toggleInteractive()">Interactive Mode</button>
	    <br/><br/>
	    <div *ngIf="(_interactiveMode | async)==true">
		    <label>Item1</label>
		    <textarea rows="1" (keyup)="itemChange($event)"></textarea>

		    <br/>
		    <label>Item2</label>
		    <textarea rows="1" (keyup)="item2Change($event)"></textarea>
		  </div>
    `
})
export class AppComponent { 
  appCtxt: any;
  echoTxt: any;
  _appState: Observable<AppStore>;
  _itemValue: Observable<string>;
  _itemValue2: Observable<string>;

  _interactiveMode: Observable<boolean>;

  constructor(private _store: Store<AppStore>) {
    this.appCtxt = (<any>window).applicationContext;
    this.appCtxt.interactive = false;
    this.echoTxt = "";
  }

  ngOnInit() {
  	//bind the observable appState to the local appState instance
    this._appState = this._store.select('appState');
    this._itemValue = this._store.select(getItemValue);
    this._itemValue2 = this._store.select(getItemValue2);

    this._interactiveMode = this._store.select(getInteractiveMode);

  }

  itemChange(event:any) {
  	this._store.dispatch({type: "ADD_ITEM", payload: {item: event.target.value}})
  }

  item2Change(event:any) {
  	this._store.dispatch({type: "ADD_ITEM2", payload: {item: event.target.value}})
  }

  toggleInteractive() {
  	this._store.dispatch({type: "TOGGLE_INTERACTIVE"});
  }
}
