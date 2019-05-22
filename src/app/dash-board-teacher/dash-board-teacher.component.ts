import { Component, OnInit } from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-dash-board-teacher',
  templateUrl: './dash-board-teacher.component.html',
  styleUrls: ['./dash-board-teacher.component.sass']
})
export class DashBoardTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
      $('.dropdown-trigger').dropdown();
      $('.tooltipped').tooltip();
    });
  }

}
