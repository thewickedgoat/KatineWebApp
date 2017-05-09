import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Menu} from '../menu';
import {MenuService} from '../menu.service';
import {Dish} from '../dish';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu;
  string: object;


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
    console.log('were here');
    this.menuservice.createMenu(this.menu).subscribe(str => this.string = str);

  }

  deleteDishLine(index){
    console.log('ost: ', index);
    this.menu.Dishes.splice(index, 1);
  }

}
