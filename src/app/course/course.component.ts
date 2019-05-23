import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  courseId: string = null;
  course: any = null;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('courseId');

    // this.courseService.getCourseById(this.courseId).subscribe(res => {
    //   if (res.errorCode === 0) {
    //     this.course = res.course;
    //   } else {
    //     this.router.navigate(['dashboard']); // Send back to home
    //   }
    // });
    console.log(this.courseId);
  }

}
