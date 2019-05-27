import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import { ParentService } from './parent.service';

@Injectable({
  providedIn: 'root'
})
export class ParentGuard implements CanActivate ,CanActivateChild {

  constructor(private par: ParentService,
    private myRoute: Router){  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if(this.par.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let loggedInUser= this.par.isLoggedIn();
        if (loggedInUser) {
                return true;		
        } else {
          console.log('Unauthorized to open link: '+ state.url);
          return false;
        }

}
}