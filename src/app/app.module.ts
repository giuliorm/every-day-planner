import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatlistComponent } from './components/statlist/statlist.component';
import { StatlistItemComponent } from './components/statlist/statlist-item/statlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StatlistComponent,
    StatlistItemComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
