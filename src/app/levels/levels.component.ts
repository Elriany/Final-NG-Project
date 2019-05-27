import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent  {
  Levels = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/Levels/')
    .subscribe(
      response =>{ 
        this.Levels = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddLevels(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/Levels',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteLevels(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/Levels/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  myLevels={};
  LevelsID;
  EditLevels(id){
    this.http.get('http://localhost:49576/api/Levels/'+id)
    .subscribe(
      response =>{    
        this.myLevels=response.json();
        this.LevelsID=response.json().id;
        //console.log(this.myLevels);
        
      },
      error=>{console.log("Faild");}
    )
  }
  updateLevels(newData){
    newData.value.id=this.LevelsID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/Levels',newData.value)
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
    this.http.get('http://localhost:49576/api/Levels/')
    .subscribe(
      response =>{ 
        this.Levels = response.json();        
      },
      error=>{console.log("success");}
    )
  }
}
