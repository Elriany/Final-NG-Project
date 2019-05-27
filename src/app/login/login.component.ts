import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';
import { ParentService } from '../parent.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private std: StudentService,
    private par: ParentService,
    private auth: AuthService,
    private http:Http) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  login(data) {
    this.http.get('http://localhost:49576/api/stuffs?email='+data.value.email+'&password='+data.value.pass)
    .subscribe(
      response=>{
          if(response.json() == 1){
            this.auth.sendToken(response.json())
            this.myRoute.navigate(["/Admin/ProfileOfAdmin"]);
          }
          else if(response.json() == 2){
            this.auth.sendToken(response.json())
            this.myRoute.navigate(["/Staff/ProfileOfStaff"]);
          }
      },
      error=>{console.log("error");
      },
    )
  }

}