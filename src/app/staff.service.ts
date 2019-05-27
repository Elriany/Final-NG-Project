import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInStaff", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInStaff")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInStaff");
    this.myRoute.navigate(["home"]);
  }
}

