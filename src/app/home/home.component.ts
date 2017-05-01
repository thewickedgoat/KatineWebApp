import { Component, OnInit } from '@angular/core';
import {Menu} from "../menu/menu";
import {MenuService} from "../menu/menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus: Menu[];

  constructor(private menuservice: MenuService) {
    this.menus = menuservice.getMenu();
  }

  ngOnInit() {
  }

}
