import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready(() => {
      $('.scrollspy').scrollSpy();
      $('.fixed-action-btn').floatingActionButton();
    });
  }

}
