import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthUser} from './auth-user';

@Component({
  selector: 'app-login-views',
  templateUrl: './login-views.component.html',
  styleUrls: ['./login-views.component.css']
})
export class LoginViewsComponent implements OnInit {
  user: AuthUser;

  @Input()
  signInError: string;

  @Input()
  tryToLogin: boolean;

  @Output()
  tryLoginEmitter = new EventEmitter<AuthUser>();

  tryLogin() {
    this.tryLoginEmitter.emit(this.user);
  }
  constructor() {
    this.user = new AuthUser();
  }

  ngOnInit() {
  }

}
