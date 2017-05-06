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


  constructor(private menuservice: MenuService) {
    this.menu = new Menu();
    this.menu.Dishes = new Array<Dish>();
  }

  ngOnInit() {
    this.addDishLine();
  }

  addDishLine() {
    this.menu.Dishes.push(new Dish());
  }

  tryCreate(){
    this.menuservice.createMenu(this.menu);
  }

  deleteDishLine(index){
    console.log('ost: ', index);
    this.menu.Dishes.splice(index, 1);
  }

}
