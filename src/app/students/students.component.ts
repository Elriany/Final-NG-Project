import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  Students = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/students/')
    .subscribe(
      response =>{ 
        this.Students = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddStudent(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/students',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteStudent(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/students/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Student={};
  StudentID;
  EditStudent(id){
    this.http.get('http://localhost:49576/api/students/'+id)
    .subscribe(
      response =>{    
        this.Student=response.json();
        this.StudentID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateStudents(newData){
    newData.value.id=this.StudentID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/students',newData.value)
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
    this.http.get('http://localhost:49576/api/students/')
    .subscribe(
      response =>{ 
        this.Students = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }
}
