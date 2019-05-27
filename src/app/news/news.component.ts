import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  News = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/News/')
    .subscribe(
      response =>{ 
        this.News = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddNews(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/News',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteNews(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/News/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  myNews={};
  NewsID;
  EditNews(id){
    this.http.get('http://localhost:49576/api/News/'+id)
    .subscribe(
      response =>{    
        this.myNews=response.json();
        this.NewsID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  updateNews(newData){
    newData.value.id=this.NewsID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/News/',newData.value)
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
    this.http.get('http://localhost:49576/api/News/')
    .subscribe(
      response =>{ 
        this.News = response.json();        
      },
      error=>{console.log("success");}
    )
  }


}
