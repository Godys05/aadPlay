import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.sass']
})
export class DashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
      $('.dropdown-trigger').dropdown();
    });
  }

}
