import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

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
  { path: 'edit-menu', component: EditMenuComponent},
  { path: 'menu-list', component: MenuListComponent}
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
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
