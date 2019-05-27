import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { ParentService } from '../parent.service';


@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private par:ParentService,private http:Http) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  login(data) {
    this.http.get('http://localhost:49576/api/parents?email='+data.value.email+'&password='+data.value.pass)
    .subscribe(
      response=>{
          if(response.json() == 4){
            this.par.sendToken(response.json())
            this.myRoute.navigate(["/Parent/ProfileOfParent"]);
          }
      },
      error=>{console.log("error");
      },
    )
  }

}