import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = true;
  role = 'user';

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
      $('.dropdown-trigger').dropdown();
      $('.tooltipped').tooltip();
    });
  }

}
