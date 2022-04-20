import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private auth: AuthService,  private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
    // check if route is restricted by role
    if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
      // role not authorised so redirect to home page
      this.router.navigate(['/']);
      return false;
    }

    return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
