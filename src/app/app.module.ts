import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StatlistModule} from './components/statlist/statlist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StatlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
