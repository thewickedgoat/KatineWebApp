import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../dish";

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.css']
})
export class DishViewComponent implements OnInit {

  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }
}
