import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DpDatePickerModule} from 'ng2-date-picker';
import {Routes, RouterModule} from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';
import { TodaysMenuComponent } from './menu/todays-menu/todays-menu.component';
import { CreateMenuComponent } from './menu/create-menu/create-menu.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import {MenuService} from './menu/menu.service';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { DishViewComponent } from './menu/Shared-components/dish-view/dish-view.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-menu', component: CreateMenuComponent},
  { path: 'todays-menu', component: TodaysMenuComponent},
  { path: 'edit-menu', component: EditMenuComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodaysMenuComponent,
    CreateMenuComponent,
    EditMenuComponent,
    ToolbarComponent,
    HomeComponent,
    MenuListComponent,
    DishViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    DpDatePickerModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
