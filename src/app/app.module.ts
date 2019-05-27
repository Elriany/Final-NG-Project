import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
// import { RouterModule } from '@angular/router';

//Components

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { NewsComponent } from './news/news.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { RolesComponent } from './roles/roles.component';
import { LevelsComponent } from './levels/levels.component';
import { StudentsComponent } from './students/students.component';
import { ParentsComponent } from './parents/parents.component';
import { CoursesComponent } from './courses/courses.component';
import { TasksComponent } from './tasks/tasks.component';
import { AbsencesComponent } from './absences/absences.component';
import { GradesComponent } from './grades/grades.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileOfAdminComponent } from './profile-of-admin/profile-of-admin.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { FeesComponent } from './fees/fees.component';
import { ProfileOfStudentComponent } from './profile-of-student/profile-of-student.component';
import { ProfileOfParentComponent } from './profile-of-parent/profile-of-parent.component';
import { ParentComponent } from './parent/parent.component';
import { StaffComponent } from './staff/staff.component';
import { ProfileOfStaffComponent } from './profile-of-staff/profile-of-staff.component';
import { SliderComponent } from './slider/slider.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BooksComponent,
    NewsComponent,
    StuffsComponent,
    RolesComponent,
    LevelsComponent,
    StudentsComponent,
    ParentsComponent,
    CoursesComponent,
    TasksComponent,
    AbsencesComponent,
    GradesComponent,
    AdminComponent,
    ProfileOfAdminComponent,
    PageNotFoundedComponent,
    LoginComponent,
    StudentComponent,
    FeesComponent,
    ProfileOfStudentComponent,
    ProfileOfParentComponent,
    ParentComponent,
    StaffComponent,
    ProfileOfStaffComponent,
    SliderComponent,
    StudentLoginComponent,
    ParentLoginComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    // RouterModule.forRoot([{}])
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
