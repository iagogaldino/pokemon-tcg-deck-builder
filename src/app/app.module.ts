import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxButtonModule,
  IgxCardModule,
  IgxDialogModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
} from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DeckInfoComponent } from './components/deck-info/deck-info.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { MyDeckComponent } from './components/my-deck/my-deck.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LoadComponent } from './shared/components/load/load.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SideMenuComponent,
  DeckListComponent,
  CardComponent,
  DeckInfoComponent,
  MyDeckComponent,
  LoadComponent,
];
const INFRAGISTICS = [
  IgxButtonModule,
  IgxIconModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
  IgxNavbarModule,
  IgxDialogModule,
  IgxInputGroupModule,
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    ...INFRAGISTICS,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
