import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent }  from './app.component';
import { Child }  from './child.component';
import { Child2 }  from './child2.component';
import { appState }  from './reducer.appstate';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	StoreModule.provideStore({appState})
  ],
  declarations: [ 
  	AppComponent,
  	Child,
  	Child2
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }