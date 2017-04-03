import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import 'hammerjs';

import { AppComponent } from './app.component';
import { TodaysMenuComponent } from './menu/todays-menu/todays-menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBbmu27G8I-DqbGNlJQBEWJPmL9IcoYr6M',
  authDomain: 'firstangularproject-deef3.firebaseapp.com',
  databaseURL: 'https://firstangularproject-deef3.firebaseio.com',
  projectId: 'firstangularproject-deef3',
  storageBucket: 'firstangularproject-deef3.appspot.com',
  messagingSenderId: '643731449610'
};

export const fireBaseLoginConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    TodaysMenuComponent,
    MenuItemComponent,
    CreateMenuComponent,
    EditMenuComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontAwesomeModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig, fireBaseLoginConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
