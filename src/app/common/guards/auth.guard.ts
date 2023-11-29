import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.auth.currentUserValue;

      if (currentUser && this.auth.isAuthenticated) {
        if (currentUser.roles[0] === 'Basic') {
          this.router.navigate(['/error/unauthorized']);
          return false;
        }        
        return true;
      }
     
      this.auth.clearSession();
      this.router.navigate(['/auth/login']);
      return false;
  }
  
}
