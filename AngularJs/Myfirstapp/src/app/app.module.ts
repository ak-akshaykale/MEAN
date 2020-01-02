import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MlistComponent } from './mlist/mlist.component';
import { MtableComponent } from './mtable/mtable.component';

@NgModule({
  declarations: [
    AppComponent,
    MlistComponent,
    MtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
