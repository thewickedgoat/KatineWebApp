import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodaysMenuComponent } from './menu/todays-menu/todays-menu.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TodaysMenuComponent,
    MenuComponent,
    MenuItemComponent,
    CreateMenuComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
