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
      name: 'Råkost salat',
      image: 'http://res.cloudinary.com/bjoernebanden/image/upload/v1493487117/ra_CC_8Akost-med-spidska_CC_8Al-og-guler_C3_B8dder_lyyrhu.jpg'
    },
      {
        id: 2,
        name: 'Klar suppe',
        image: 'http://res.cloudinary.com/bjoernebanden/image/upload/v1493482217/klar-suppe-med-k_C3_B8d-og-melboller-23_tajljq.jpg'
      },
      {
        id: 3,
        name: 'Stegt Flæsk',
        image: 'http://res.cloudinary.com/bjoernebanden/image/upload/v1493482190/restaurant-bennys-aarhus-080515-2221262-regular_mmb71l.jpg'
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
