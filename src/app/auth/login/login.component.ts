import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthService} from "../auth.service";
import {AuthUser} from "./auth-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginError: string;
  request: Subscription;
  tryLogin: boolean;

  constructor(private loginValidationBar: MdSnackBar, private router: Router, private authService: AuthService) { }

  login(user : AuthUser){
    this.tryLogin = true;
    if (this.request){
      this.request.unsubscribe();
    }
    this.request = this.authService
      .login(user.email, user.password).delay(3000)
      .subscribe((lUser) => {
        if(lUser) {
          this.loginError = null;
          this.router.navigate(['/']).then(() => {
            this.loginValidationBar.open("You are logged in", "OK", {
              duration: 4000,
            });
          });

        }
        else {
          this.loginError = "incorrect username or password";
        }
        this.router.navigate(["/users"]);
        this.tryLogin = false;
      })

  }
  ngOnInit() {
  }

}
