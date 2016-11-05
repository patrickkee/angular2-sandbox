import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular!</h1>
    	<child></child>
	    <div>
	      <pre>{{ data | json }}</pre>
	    </div>
    `
})
export class AppComponent { 
  data: any;
  constructor() {
    this.data = window.appCtxt;
  }
}
