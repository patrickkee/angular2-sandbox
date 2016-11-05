import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Child }  from './Child.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	Child 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
