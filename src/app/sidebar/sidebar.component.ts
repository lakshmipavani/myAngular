import { Component } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  template: `
  <div id="wrapper">
      <!-- side-bar content -->
          <div class="sidebar-wrapper"  [ngClass]="{'opened':_opened,'closed':!_opened}">
                 <ul class="sidebar-nav">
                    <li ><a  [routerLink]="['DataTable']"><img src="assets/a1.jpg" height="50px" width="50px"></a></li>
                    <li ><a  [routerLink]="['highcharts']">HighCharts</a></li>
                    <li ><a  [routerLink]="['movablegrid']">Gri dControls</a></li>
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