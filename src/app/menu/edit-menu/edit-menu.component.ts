import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import {MenuService} from '../menu.service';
import 'rxjs/add/operator/switchMap';
import {Menu} from '../menu';
import {Dish} from '../dish';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})


export class EditMenuComponent implements OnInit {

  menu: Menu;
  str: String;

  constructor(private router: ActivatedRoute, private menuservice: MenuService) {
  }

  ngOnInit() {
    this.router.params
      .switchMap((params: Params) => this.menuservice.getMenu(+params['id']))
      .subscribe(menu => {
        this.menu = menu;
        console.log(menu);
      });
  }

  tryEdit(){
    this.menuservice.editMenu(this.menu).subscribe(res => {
      this.str = res;
      console.log(res);
    });
    console.log('wii r here');
    this.ngOnInit();
  }

  deleteDishLine(index){
    this.menu.Dishes.splice(index, 1);
  }
  addDishLine() {
    this.menu.Dishes.push(new Dish());
  }
}
