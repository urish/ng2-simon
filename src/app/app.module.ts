import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimonModule } from './simon';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SimonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
