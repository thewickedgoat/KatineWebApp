import {Injectable, OnInit} from '@angular/core';
import {Menu} from './menu';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MenuService implements OnInit {

  APIurl = 'http://cantine-restapi-webapp.azurewebsites.net/api/menu/';
  TmpAPIurl = 'http://localhost:7874/api/menu/';

  menu: Menu[];
  images: string[];

  constructor(private http: Http) {
  }

  ngOnInit(): void {

  }

  createMenu(menu: Menu) {
    return this.http.post(this.APIurl, menu);
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get(this.APIurl)
      .map(response => response.json() as Menu[]);
  }

  deleteMenu(id: number) : any {
    console.log('lål');
    return this.http.delete(this.APIurl + id).map(res => res.json() as object);

  }

  editMenu(menu: Menu) {
    console.log(menu);
    return this.http.put(this.APIurl + menu.Id, menu);
    ;
  }

  getMenu(id: number): Observable<Menu> {
    return this.http.get(this.APIurl + id)
      .map(menu => menu.json() as Menu);
  }

  getAllImages(): Observable<string[]> {
    return this.http.get(this.APIurl + "/getAllImages")
      .map(images => images.json() as string[]);
  }
}


