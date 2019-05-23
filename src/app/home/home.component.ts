import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    $( document ).ready(() => {
      // $('.scrollspy').scrollSpy();
      $('.fixed-action-btn').floatingActionButton();
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
