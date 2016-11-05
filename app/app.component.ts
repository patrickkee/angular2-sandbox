import { Component, ElementRef } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular!</h1>
    	<child></child>
    `
})
export class AppComponent { 
	constructor(elementRef: ElementRef) {
  	console.log(elementRef.nativeElement.getAttribute("appCtxt"));
  }
}
