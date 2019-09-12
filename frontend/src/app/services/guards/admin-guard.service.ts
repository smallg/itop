import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('access_token')) {
      const userRoles = sessionStorage.getItem('userRoles');
      if (userRoles && userRoles.indexOf('ADMIN') >= 0) {
        return true;
      }
      this.router.navigate(['/404']).then();
      return false;
    }
    return false;
  }
}
