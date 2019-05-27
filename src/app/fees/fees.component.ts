import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
 Fees;
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/StdLevel')
    .subscribe(
      response =>{ 
        this.Fees = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddFee(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/StdLevel',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  Fee={};
  FeeID;
  EditFees(id){
    this.http.get('http://localhost:49576/api/StdLevel/'+id)
    .subscribe(
      response =>{    
        this.Fee=response.json();
        this.FeeID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateFees(newData){
    newData.value.id=this.FeeID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/StdLevel/',newData.value)
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
    this.http.get('http://localhost:49576/api/StdLevel')
    .subscribe(
      response =>{ 
        this.Fees = response.json();        
      },
      error=>{console.log("Faild");}
    )
  }

  ngOnInit() {
  }

}
