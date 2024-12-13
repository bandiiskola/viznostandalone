import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './fooldal/fooldal.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { HibaFelvitelComponent } from './hiba-felvitel/hiba-felvitel.component';
import { HibaListaComponent } from './hiba-lista/hiba-lista.component';
import { ChatComponent } from './chat/chat.component';
import { DiagrammComponent } from './diagramm/diagramm.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    FejlecComponent,
    LablecComponent,
    HibaFelvitelComponent,
    HibaListaComponent,
    ChatComponent,
    DiagrammComponent
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
