import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { HomeCourseComponent } from './home-course/home-course.component';
import { ProfileComponent } from './profile/profile.component';
import { DashBoardTeacherComponent } from './dash-board-teacher/dash-board-teacher.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'dashboardStudent', component: DashBoardComponent},
  {path: 'dashboardTeacher', component: DashBoardTeacherComponent},
  {path: 'myCourses', component: MyCoursesComponent},
  {path: 'homeCourse', component: HomeCourseComponent},
  {path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  {path: 'exam', component: ExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
