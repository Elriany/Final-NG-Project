import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public auth: AuthService,public std: StudentService,public par:ParentService) { }
  ngOnInit() {
  }

}