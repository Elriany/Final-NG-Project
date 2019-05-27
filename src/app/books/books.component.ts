import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  Books = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/books/')
    .subscribe(
      response =>{ 
        this.Books = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddBook(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/books',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteBook(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/books/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  mybook={};
  bookID;
  EditBook(id){
    this.http.get('http://localhost:49576/api/books/'+id)
    .subscribe(
      response =>{    
        this.mybook=response.json();
        this.bookID=response.json().bookID;
      },
      error=>{console.log("Faild");}
    )
  }
  updateBook(newData){
    newData.value.bookID=this.bookID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/books/',newData.value)
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
    this.http.get('http://localhost:49576/api/books/')
    .subscribe(
      response =>{ 
        this.Books = response.json();        
      },
      error=>{console.log("success");}
    )
  }

}
