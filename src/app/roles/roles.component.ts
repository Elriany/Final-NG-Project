import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent{
  Roles = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/Roles/')
    .subscribe(
      response =>{ 
        this.Roles = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddRoles(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/Roles',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteRoles(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/Roles/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  myRoles={};
  RolesID;
  EditRoles(id){
    this.http.get('http://localhost:49576/api/Roles/'+id)
    .subscribe(
      response =>{    
        this.myRoles=response.json();
        this.RolesID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateRoles(newData){
    newData.value.id=this.RolesID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/Roles/',newData.value)
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
    this.http.get('http://localhost:49576/api/Roles/')
    .subscribe(
      response =>{ 
        this.Roles = response.json();        
      },
      error=>{console.log("success");}
    )
  }

}
