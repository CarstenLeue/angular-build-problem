import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { WchNgLoggingModule } from 'ibm-wch-sdk-ng-logger';
import { WchNgModule } from 'ibm-wch-sdk-ng';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WchNgLoggingModule.forRoot(),
    WchNgModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
