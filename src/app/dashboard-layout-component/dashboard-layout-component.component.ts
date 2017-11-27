import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../global.service';

@Component({
  selector: 'app-dashboard-layout-component',
  templateUrl: './dashboard-layout-component.component.html',
  styleUrls: ['./dashboard-layout-component.component.css']
})
export class DashboardLayoutComponentComponent implements OnInit {
  showMenu:boolean;
  constructor(public globalVariableService: GlobalVariableService) {
   }
  ngOnInit() {
  }

}
