import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HibaFelvitelComponent } from './hiba-felvitel/hiba-felvitel.component';
import { HibaListaComponent } from './hiba-lista/hiba-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HibaFelvitelComponent,
    HibaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
