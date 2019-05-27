import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate ,CanActivateChild {

  constructor(private std: StudentService,
    private myRoute: Router){  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if(this.std.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let loggedInUser= this.std.isLoggedIn();
        if (loggedInUser) {
                return true;		
        } else {
          console.log('Unauthorized to open link: '+ state.url);
          return false;
        }

}
}