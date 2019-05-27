import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {

  Levels = [];
  Courses = [];
  Grades = [];
  constructor(private http:Http) {
    this.http.get("http://localhost:49576/api/levels")
    .subscribe(
      response=>{ this.Levels = response.json(); },
      error=>{console.log();
      }
      
    );
    this.http.get("http://localhost:49576/api/StdCrs")
    .subscribe(
      response=>{ this.Grades = response.json(); },
      error=>{console.log();
      });
    this.http.get("http://localhost:49576/api/courses")
    .subscribe(
      response=>{ this.Courses = response.json(); },
      error=>{console.log();
      }
      
    );

   }

   AddGrade(data)
   {
    this.http.post("http://localhost:49576/api/StdCrs",data.value)
    .subscribe(
      response=>{ console.log("Success");
       },
      error=>{console.log();
      }
      
    );
   }
   fName;
   lName;
   displayName(event)
   {
     //console.log(id.target.value);
     
    this.http.get("http://localhost:49576/api/students/"+event.target.value)
    .subscribe(
      response=>{ 
        //console.log(response);
        this.fName=response.json().fname;
        this.lName=response.json().lname;
      },
      error=>{console.log("error");
      }
      
    );
    //this.fName="ali";
    //this.lName="ali";
    //this.myStudent={fname:"ali",lname:"ahmad"}
   }
}
