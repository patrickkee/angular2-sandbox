import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent }  from './app.component';
import { Child }  from './Child.component';
import { appState }  from './reducer.appstate';
import { loanState }  from './reducer.loan';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	StoreModule.provideStore({appState})
  ],
  declarations: [ 
  	AppComponent,
  	Child
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }