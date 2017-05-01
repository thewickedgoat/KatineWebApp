import { Component, OnInit } from '@angular/core';
import {Menu} from "../menu";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menu: Menu;

  constructor() {
    this.menu = new Menu;
  }

  ngOnInit() {
  }

}
