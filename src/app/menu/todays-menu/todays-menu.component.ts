import {Component, OnInit} from '@angular/core';
import {Menu} from "../menu";
import {MenuService} from "../menu.service";

@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css'],

})
export class TodaysMenuComponent implements OnInit {
  menu: Menu;

  constructor(private menuservice: MenuService) {
  }

  ngOnInit() {
    this.menuservice.getTodaysMenu().subscribe(menu =>
      this.menu = menu);
  }

}
