import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuService} from "../menu.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images : string[];

  constructor(private menuservice: MenuService, private router: Router) { }

  ngOnInit() {
    this.menuservice.getAllImages().subscribe(images => this.images = images);
  }

}
