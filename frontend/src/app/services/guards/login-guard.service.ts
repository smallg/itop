import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('access_token')) {
      const userRoles = sessionStorage.getItem('userRoles');
      if (userRoles.indexOf('ADMIN') >= 0) {
        this.router.navigate(['/setting']).then();
      } else {
        this.router.navigate(['/home']).then();
      }
      return false;
    }
    return true;
  }
}
