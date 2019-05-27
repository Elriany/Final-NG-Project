import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("studentLogin", token)
  }
  getToken() {
    return localStorage.getItem("studentLogin")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  // logout() {
  //   localStorage.removeItem("studentLogin");
  //   this.myRoute.navigate(["home"]);
  // }
}

