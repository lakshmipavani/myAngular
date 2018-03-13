import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../global.service';


@Component({
  selector: 'app-craftview',
  templateUrl: './craftview.component.html',
  styleUrls: ['./craftview.component.css']
})
export class CraftviewComponent implements OnInit {

  constructor(public globalVariableService: GlobalVariableService) { 
    globalVariableService.hideMenu();
  }
  goToHome(){
    this.globalVariableService.showMenu();
  }
  goToShopMenu(){
    this.globalVariableService.showShopMenu();
  }
  goToProductMenu(){
    this.globalVariableService.showProductMenu();
  }
  ngOnInit() {
  }
}