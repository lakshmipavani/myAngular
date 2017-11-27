import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../global.service';

@Component({
  selector: 'app-shopmenu',
  templateUrl: './shopmenu.component.html',
  styleUrls: ['./shopmenu.component.css']
})
export class ShopmenuComponent implements OnInit {

  constructor(public globalVariableService: GlobalVariableService) {
    globalVariableService.showShopMenu(); 
  }
  goToCraftView(){
    this.globalVariableService.hideShopMenu();
  }
  ngOnInit() {
  }

}
