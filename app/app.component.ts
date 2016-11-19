import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular!</h1>
    	<p>Application Context Foo Value: <strong>{{appCtxt.foo}}</strong></p>
    	<child></child>
    	<br/><br/>
	    <button (click)="toggleInteractive()">Interactive Mode</button>
	    <br/><br/>
	    <div *ngIf="appCtxt.interactive==true">
		    <textarea rows="1" (keyup)="onkeyup($event)">{{echoTxt}}</textarea>
		    <button (click)="onClickMe()">Alert Me!</button>
		    <p>{{echoTxt}}</p>
		  </div>
    `
})
export class AppComponent { 
  appCtxt: any;
  echoTxt: string;
  constructor() {
    this.appCtxt = (<any>window).applicationContext;
    this.appCtxt.interactive = false;
    this.echoTxt = "";
  }

  onClickMe() {
  	alert(this.echoTxt);
  }

  onkeyup(event:any) {
  	this.echoTxt = event.target.value;
  }

  toggleInteractive() {
  	this.appCtxt.interactive = !this.appCtxt.interactive;
  }
}
