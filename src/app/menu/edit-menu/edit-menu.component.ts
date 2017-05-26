import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private menuservice: MenuService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.menuservice.getMenu(+params['id']))
      .subscribe(menu => {
        this.menu = menu;
        console.log(menu);
      });
  }

  tryEdit(){
    console.log(this.menu);
    this.menuservice.editMenu(this.menu).subscribe(() => {
      this.router.navigate(['/']);
    }, error2 => {
      console.log(error2);
    });
  }

  deleteDishLine(index){
    console.log(index);
    this.menu.Dishes.splice(index, 1);
  }
  addDishLine() {
    this.menu.Dishes.push(new Dish());
  }
}
