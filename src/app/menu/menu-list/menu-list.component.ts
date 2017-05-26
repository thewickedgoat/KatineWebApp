import { Component, OnInit } from '@angular/core';
import {Menu} from 'app/menu/menu';
import {MenuService} from '../menu.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[];
  constructor(private menuservice: MenuService, private router: Router) {

  }

  ngOnInit() {
    this.menuservice.getMenus().subscribe(menus => this.menus = menus);
  }

  deleteMenu(menu: Menu) {
    this.menuservice.deleteMenu(menu.Id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
      }, error2 => {console.log(error2);
    });
  }

  editMenu(menu: Menu){
    this.router.navigate(['/edit-menu/' + menu.Id]);
  }
}
