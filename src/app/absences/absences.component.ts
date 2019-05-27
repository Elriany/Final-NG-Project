import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
public absenceDate;
public start;
public end;
  Absences = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/absences')
    .subscribe(
      response =>{ 
        this.Absences = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  /////////////////////////////////////////////////////////
  GetAbsence()
  {
    this.http.get("http://localhost:49576/api/search?d="+this.absenceDate)
    .subscribe(
      response=>
      {
        // console.log("sent successfully")
        // console.log(response.json());
        this.Absences=response.json();
      },
      error=>
      {
        
        console.log("Error: Its not sent!!!");
        
      }
    )
  }
  /////////////////////////////////////////////////////
  GetAbsenceRange()
  {
    this.http.get("http://localhost:49576/api/search?StartDate="+this.start+"&EndDate="+this.end)
    .subscribe(
      response=>
      {
        // console.log("sent successfully :)");
        // console.log(response.json());
        this.Absences=response.json();
      }
      ,
      error=>
      {
             console.log("Error:Its not sent !!!");
             
      })
  }
  /////////////////////////////////////////////////////
  AddAbsence(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/absences',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteAbsence(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/absences/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Absence={};
  AbsenceID;
  EditAbsence(id){
    this.http.get('http://localhost:49576/api/absences'+id)
    .subscribe(
      response =>{    
        this.Absence=response.json();
        this.AbsenceID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateAbsences(newData){
    newData.value.id=this.AbsenceID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/absences',newData.value)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("success");        
      },
      error=>{console.log("Faild");}
    )
    
  }
  refreshList()
  {
    this.http.get('http://localhost:49576/api/absences')
    .subscribe(
      response =>{ 
        this.Absences = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }


}
