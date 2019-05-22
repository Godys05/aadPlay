import { Component, OnInit } from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
      $('.tooltipped').tooltip();
    });
  }

}
