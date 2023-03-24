import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaVitulanoComponent } from './lista-vitulano/lista-vitulano.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVitulanoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
