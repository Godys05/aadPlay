import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamComponent } from './exam/exam.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // Auth routes
  { path: 'login', component: LoginComponent },

  // User routes
  { path: 'courses', component: CoursesComponent }, // available courses
  { path: 'course/:courseId', component: CourseComponent }, // Specific course
  { path: 'myCourses', component: MyCoursesComponent }, // my courses
  { path: 'dashboard', component: DashboardComponent },

  // { path: 'course/:courseId/exams/:examId', component: ExamComponent }
  // { path: 'course/:courseId/lectures/:lectureId', component: ExamComponent }

  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
