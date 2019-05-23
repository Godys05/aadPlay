import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  role = 'user';

  constructor() { }

  ngOnInit() {
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
  }

}
