import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("ParentLogin", token)
  }
  getToken() {
    return localStorage.getItem("ParentLogin")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  // logout() {
  //   localStorage.removeItem("ParentLogin");
  //   this.myRoute.navigate(["home"]);
  // }
}

