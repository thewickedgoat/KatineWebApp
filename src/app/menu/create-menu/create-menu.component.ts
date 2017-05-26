import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Menu} from '../menu';
import {MenuService} from '../menu.service';
import {Dish} from '../dish';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu;
  string: object;


  constructor(private menuservice: MenuService, private router: Router) {
    this.menu = new Menu();
    this.menu.Dishes = new Array<Dish>();
  }

  ngOnInit() {
    this.addDishLine();
  }

  addDishLine() {
    this.menu.Dishes.push(new Dish());
  }

  tryCreate() {
    var d = new Date(this.menu.Date);
    d.setMinutes(d.getMinutes() + 240);
    this.menu.Date = d;
    this.menuservice.createMenu(this.menu).subscribe(str => {
      this.string = str;
      this.router.navigate(['/']);
    });
  }

  deleteDishLine(index) {
    this.menu.Dishes.splice(index, 1);
  }
}
