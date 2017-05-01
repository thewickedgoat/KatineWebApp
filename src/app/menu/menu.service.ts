import {Injectable, OnInit} from '@angular/core';
import {Menu} from './menu';
import {Dish} from './dish';

@Injectable()
export class MenuService implements OnInit {

  menu: Menu[];
  dish: Dish[];

  constructor() {
    this.dish = [{
      id: 1,
      name: 'dish1',
      image: 'image1'
    },
      {
        id: 2,
        name: 'dish2',
        image: 'image2'
      }];
    this.menu = [{
      id: 1,
      date: Date.now(),
      dishes: this.dish
    }, {
      id: 2,
      date: Date.now(),
      dishes: this.dish
    }];
  }

  ngOnInit(): void {

  }

  getMenu(): Menu[] {
  return this.menu;
  }
}
