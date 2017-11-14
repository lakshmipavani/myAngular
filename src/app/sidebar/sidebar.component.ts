import { Component } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  template: `
  <div id="wrapper">
      <!-- side-bar content -->
          <div class="sidebar-wrapper"  [ngClass]="{'opened':_opened,'closed':!_opened}">
                 <ul class="sidebar-nav">
                    <li ><a  [routerLink]="['tasks']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['listview']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['persons']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['carousel']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['DataTable']"><img src="assets/datatable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['highcharts']"><img src="assets/highchart.jpg" height="30px" width="30px"></a></a></li>
                    <li ><a  [routerLink]="['movablegrid']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['dragDrop']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['converter']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                    <li ><a  [routerLink]="['sidebar']"><img src="assets/draggable.jpg" height="30px" width="30px"></a></li>
                 </ul>
          </div>
      

      <!-- main-page content -->
      <div class="page-content-wrapper" [ngClass]="{'opened':_opened,'closed':!_opened}">
         <button id="menu-toggle" (click)="menuToggle($event)">Toggle Me</button>
      </div>

      <div class="contextView" [ngClass]="{'opened':_opened,'closed':!_opened}">
            <router-outlet></router-outlet>
      </div>
  </div>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent {
  private _opened: boolean = false;
  menuToggle(event){
      this._opened = !this._opened;
      //event.preventDefault();
  }
}