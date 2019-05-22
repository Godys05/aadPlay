import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProfileComponent } from './profile/profile.component';
import { DashBoardTeacherComponent } from './dash-board-teacher/dash-board-teacher.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { HomeCourseComponent } from './home-course/home-course.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashBoardComponent,
    ProfileComponent,
    DashBoardTeacherComponent,
    MyCoursesComponent,
    HomeCourseComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
