import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { RetrieveDataService } from './retrieve-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
    RetrieveDataService, {
      provide: 'SOURCE_URL',
      useValue: 'https://swapi.co/api/people'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
