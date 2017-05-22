
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule, ActivatedRouteSnapshot} from '@angular/router';
import {AlertModule, CarouselModule} from 'ngx-bootstrap';
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {DpDatePickerModule} from 'ng2-date-picker';

import 'hammerjs';

import {AppComponent} from './app.component';
import {TodaysMenuComponent} from './menu/todays-menu/todays-menu.component';
import {CreateMenuComponent} from './menu/create-menu/create-menu.component';
import {EditMenuComponent} from './menu/edit-menu/edit-menu.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MenuService} from './menu/menu.service';
import {MenuListComponent} from './menu/menu-list/menu-list.component';
import {DishViewComponent} from './menu/Shared-components/dish-view/dish-view.component';

const appRoutes: Routes = [
  {path: 'create-menu', component: CreateMenuComponent},
  {path: 'todays-menu', component: TodaysMenuComponent},
  {path: 'edit-menu/:id', component: EditMenuComponent},
  {path: '', component: MenuListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodaysMenuComponent,
    CreateMenuComponent,
    EditMenuComponent,
    ToolbarComponent,
    MenuListComponent,
    DishViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    DatepickerModule.forRoot(),
    DpDatePickerModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
