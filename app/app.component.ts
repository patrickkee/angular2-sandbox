import { Component, ElementRef } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './interface.appstore';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular!</h1>
    	<p>Application Context Foo Value: <strong>{{appCtxt.foo}}</strong></p>
    	<child [appStore]="_appState | async"></child>
    	<br/><br/>
	    <button (click)="toggleInteractive()">Interactive Mode</button>
	    <br/><br/>
	    <div *ngIf="appCtxt.interactive==true">
		    <textarea rows="1" (keyup)="onkeyup($event)"></textarea>
		    <button (click)="onClickMe()">Alert Me!</button>
		    <p>{{echoTxt}}</p>
		  </div>
    `
})
export class AppComponent { 
  appCtxt: any;
  echoTxt: any;
  _appState: Observable<AppStore>;
  constructor(private _store: Store<any>) {
    this.appCtxt = (<any>window).applicationContext;
    this.appCtxt.interactive = false;
    this.echoTxt = "";
    
    //bind the observable appState to the local appState instance
    this._appState = _store.select('appState');

  }

  onClickMe() {
  	alert(this.echoTxt);
  }

  onkeyup(event:any) {
  	this._store.dispatch({type: "ADD_ITEM", payload: {item: event.target.value}})
  }

  toggleInteractive() {
  	this.appCtxt.interactive = !this.appCtxt.interactive;
  }
}
