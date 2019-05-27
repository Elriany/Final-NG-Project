import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { StaffComponent } from './staff/staff.component';
import { ProfileOfAdminComponent } from './profile-of-admin/profile-of-admin.component';
import { ProfileOfStudentComponent } from './profile-of-student/profile-of-student.component';
import { ProfileOfParentComponent } from './profile-of-parent/profile-of-parent.component';
import { ProfileOfStaffComponent } from './profile-of-staff/profile-of-staff.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FeesComponent } from './fees/fees.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentGuard } from './student.guard';
import { ParentGuard } from './parent.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,

    children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'parentLogin', component: ParentLoginComponent },
        { path: 'studentLogin', component: StudentLoginComponent },
        { path: 'home', component: HomeComponent },
      ]
  },
  {
    path: 'Admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children:
          [
            { path: 'Absences', component: AbsencesComponent },
            { path: 'Books', component: BooksComponent },
            { path: 'News', component: NewsComponent },
            { path: 'Stuffs', component: StuffsComponent },
            { path: 'Roles', component: RolesComponent },
            { path: 'Levels', component: LevelsComponent },
            { path: 'Students', component: StudentsComponent },
            { path: 'Parents', component: ParentsComponent },
            { path: 'Courses', component: CoursesComponent },
            { path: 'Tasks', component: TasksComponent },
            { path: 'ProfileOfAdmin', component: ProfileOfAdminComponent },
            { path: 'Grades', component: GradesComponent },
            { path: 'Fees', component: FeesComponent },
          ]
      }
    ]
  },

  {
    path: 'Staff', component: StaffComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children:
          [
            { path: 'Absences', component: AbsencesComponent },
            { path: 'News', component: NewsComponent },
            { path: 'Courses', component: CoursesComponent },
            { path: 'Tasks', component: TasksComponent },
            { path: 'ProfileOfStaff', component: ProfileOfStaffComponent },
            { path: 'Grades', component: GradesComponent },
            { path: 'Books', component: BooksComponent },
          ]
      }
    ]
  },
  {
    path: 'Parent', component: ParentComponent, canActivate: [ParentGuard],
    children: [
      {
        path: '',
        canActivateChild: [ParentGuard],
        children:
          [
            { path: 'Absences', component: AbsencesComponent },
            { path: 'News', component: NewsComponent },
            { path: 'Courses', component: CoursesComponent },
            { path: 'Tasks', component: TasksComponent },
            { path: 'ProfileOfParent', component: ProfileOfParentComponent },
            { path: 'Grades', component: GradesComponent },
            { path: 'Fees', component: FeesComponent },
          ]
      }
    ]
  },

  {
    path: 'Student', component: StudentComponent, canActivate: [StudentGuard],
    children: [
      {
        path: '',
        canActivateChild: [StudentGuard],
        children:
          [
            { path: 'Books', component: BooksComponent },
            { path: 'News', component: NewsComponent },
            { path: 'Courses', component: CoursesComponent },
            { path: 'Tasks', component: TasksComponent },
            { path: 'Grades', component: GradesComponent },
            { path: 'ProfileOfStudent', component: ProfileOfStudentComponent }
          ]
      }
    ]
  },
  { path: '**', component: PageNotFoundedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }