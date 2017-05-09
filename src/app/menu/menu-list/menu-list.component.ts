import { Component, OnInit } from '@angular/core';
import {Menu} from 'app/menu/menu';
import {MenuService} from '../menu.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[];
  string: object;
  constructor(private menuservice: MenuService) {

  }

  ngOnInit() {
    this.menuservice.getMenus().subscribe(menus => this.menus = menus);
  }

  deleteMenu(menu: Menu) {
    this.menuservice.deleteMenu(menu.Id).subscribe(str => this.string = str);
  }
}
