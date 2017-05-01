import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';
import {Dish} from '../dish';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu;

  dish: Dish;

  constructor() {
    this.menu = new Menu();
    this.dish = new Dish();
  }

  ngOnInit() {
  }

}
