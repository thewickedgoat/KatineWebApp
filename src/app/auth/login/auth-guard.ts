import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated().do(authenticated => {
      if (!authenticated) this.router.navigate(['/login'])
    })
  }
}
