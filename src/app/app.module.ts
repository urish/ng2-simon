import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SimonGame } from './simon/SimonGame';
import { SimonSegment } from './simon/SimonSegment';
import { SimonScore } from './simon/SimonScore';
import { SimonBlink } from './simon/SimonBlink';

@NgModule({
  declarations: [
    AppComponent,
    SimonGame,
    SimonSegment,
    SimonScore,
    SimonBlink
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
