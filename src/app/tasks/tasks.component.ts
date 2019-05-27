import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Tasks = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/Tasks')
    .subscribe(
      response =>{ 
        this.Tasks = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddTask(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/Tasks',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteTask(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/Tasks/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Task={};
  TaskID;
  EditTask(id){
    this.http.get('http://localhost:49576/api/Tasks'+id)
    .subscribe(
      response =>{    
        this.Task=response.json();
        this.TaskID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateTasks(newData){
    newData.value.id=this.TaskID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/Tasks',newData.value)
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
    this.http.get('http://localhost:49576/api/Tasks')
    .subscribe(
      response =>{ 
        this.Tasks = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }

}
