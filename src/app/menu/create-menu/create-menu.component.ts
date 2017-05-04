import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Menu} from '../menu';
import {MenuService} from "../menu.service";
import {Dish} from "../dish";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu;
  dishes: Dish[] = [];
  theshit: string;

  constructor(private menuservice: MenuService) {
  }

  ngOnInit() {
    this.addDishLine();
  }

  addDishLine() {
    this.dishes.push(new Dish());
  }

  tryCreate(){
    this.menuservice.createMenu(this.menu);
  }

  deleteDishLine(index){
    console.log('ost: ', index);
    this.dishes.splice(index, 1);
  }

}
