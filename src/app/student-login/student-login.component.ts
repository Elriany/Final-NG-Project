import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private std:StudentService ,private http:Http) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  login(data) {
    this.http.get('http://localhost:49576/api/students?email='+data.value.email+'&password='+data.value.pass)
    .subscribe(
      response=>{
          if(response.json() == 3){
            this.std.sendToken(response.json())
            this.myRoute.navigate(["/Student/ProfileOfStudent"]);
          }
      },
      error=>{console.log("error");
      },
    )
  }

}