import { Component, OnInit } from '@angular/core';
import {Menu} from "../menu";
import {MenuService} from "../menu.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css'],

})
export class TodaysMenuComponent implements OnInit {
menu : Menu;

  constructor(private route: ActivatedRoute, private menuservice: MenuService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.menuservice.getMenu(+params['id']))
      .subscribe(menu => {
        this.menu = menu;
      });
  }

}
