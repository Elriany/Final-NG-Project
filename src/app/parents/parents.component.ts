import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  Parents = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/parents')
    .subscribe(
      response =>{ 
        this.Parents = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddParent(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/parents',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteParent(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/parents/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  Parent={};
  ParentID;
  EditParent(id){
    this.http.get('http://localhost:49576/api/parents'+id)
    .subscribe(
      response =>{    
        this.Parent=response.json();
        this.ParentID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateParents(newData){
    newData.value.id=this.ParentID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/parents',newData.value)
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
    this.http.get('http://localhost:49576/api/parents')
    .subscribe(
      response =>{ 
        this.Parents = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }

}