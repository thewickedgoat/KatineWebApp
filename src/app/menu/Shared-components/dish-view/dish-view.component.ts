import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../dish";
import {MenuService} from "../../menu.service";

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.css']
})
export class DishViewComponent implements OnInit {

  @Input()
  dish: Dish;

  images: string[];

  constructor(private menuservice: MenuService) { }

  ngOnInit() {
    this.menuservice.getAllImages().subscribe(images => this.images = images);
  }

  setImage(image: string){

    this.dish.Image = image;

  }
}
