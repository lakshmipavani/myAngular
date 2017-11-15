import { Component } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  template: `
  <div id="wrapper">
      <!-- side-bar content -->
          <div class="sidebar-wrapper"  [ngClass]="{'opened':_opened,'closed':!_opened}">
                 <ul class="sidebar-nav">


                              <li ><a  [routerLink]="['tasks']">Todos</a></li>
                              <li ><a  [routerLink]="['listview']">ListView</a></li>
                              <li ><a  [routerLink]="['persons']">Persons</a></li>
                              <li ><a  [routerLink]="['carousel']">Carousel</a></li>
                              <li ><a  [routerLink]="['DataTable']">DataTables</a></li>
                              <li ><a  [routerLink]="['highcharts']">HighCharts</a></li>
                              <li ><a  [routerLink]="['movablegrid']">GridControls</a></li>
                              <li ><a  [routerLink]="['dragDrop']">DragDrop</a></li>
                              <li ><a  [routerLink]="['converter']">Converter</a></li>


                              <!-- <li ><a  [routerLink]="['tasks']">Todos</a></li>
                              <li ><a  [routerLink]="['listview']">ListView</a></li>
                              <li ><a  [routerLink]="['persons']">Persons</a></li> -->


                              <!-- <li ><a  [routerLink]="['carousel']"><img src="assets/carousel.png" height="30px" width="30px" /></a></li>
                              <li ><a  [routerLink]="['DataTable']"><img src="assets/datatable.jpg" height="30px" width="30px" /></a></li>
                              <li ><a  [routerLink]="['highcharts']"><img src="assets/hightchart.png" height="30px" width="30px" /></a></li>
                              <li ><a  [routerLink]="['movablegrid']"><img src="assets/draggable.jpg" height="30px" width="30px" /></a></li> -->


                              <!-- <li ><a  [routerLink]="['dragDrop']">DragDrop</a></li>
                              <li ><a  [routerLink]="['converter']">Converter</a></li> -->
                 </ul>
          </div>
      

      <!-- main-page content -->
      <div class="page-content-wrapper" [ngClass]="{'opened':_opened,'closed':!_opened}">
         <div id="menu-toggle" class="toggleImage" [ngClass]="{'closed':!_opened}" (mouseover)="menuToggle($event)" (click)="menuToggle($event)"></div>
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