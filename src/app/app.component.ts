import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'G-Project';
  appearance1= false;
   appearance2= false;
    appearance3 =false;
    appearance4 =false;
    change1()
  {    this.appearance1=!this.appearance1;
  }
  change2()
  {
    this.appearance2=!this.appearance2;
  }
  change3()
  {
    this.appearance3=!this.appearance3;
  }
  change4()
  {
    this.appearance4=!this.appearance4;
  }
}

 
 

            
       




    


