import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls:['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  $('.nav').on('click', 'li', function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
});

}
