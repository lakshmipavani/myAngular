import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginviewComponent } from './loginview/loginview.component';

import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { ListviewComponent } from './listview/listview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatatableComponent } from './datatable/datatable.component';
//import { HighchartsComponent } from './highcharts/highcharts.component';
import { WidgetgridComponent } from './widgetgrid/widgetgrid.component';
import { DragDropComponentComponent } from './drag-drop-component/drag-drop-component.component';
import { ConverterComponent } from './converter/converter.component';
import { SideBarComponent } from './sidebar/sidebar.component';

import { LoginLayoutComponentComponent } from './login-layout-component/login-layout-component.component';
import { DashboardLayoutComponentComponent } from './dashboard-layout-component/dashboard-layout-component.component';


  // Route config let's you map routes to components
  const routes: Routes = [
         {
          path: '',
          component: LoginLayoutComponentComponent,
          children: [
            {
            path:'login',component:LoginviewComponent
            }
          ]
      },
      {
        path: 'dashboard',
        component: DashboardLayoutComponentComponent,
        children: [
          {
          path:'listview',component:ListviewComponent
          },
          {
          path:'tasks',component: TasksComponent
          },
          {
          path:'nav-bar',component: NavBarComponent
          },
          {
          path:'carousel',component: CarouselComponent
          },
          {
          path:'DataTable',component: DatatableComponent
          },
          {
          path:'movablegrid',component: WidgetgridComponent
          },
          {
          path:'dragDrop',component: DragDropComponentComponent
          },
          {
          path:'converter',component: ConverterComponent
          },
          {
          path: 'persons',component: PeopleListComponent
          },
          {
          path: 'sidebar',
          component: SideBarComponent,
          children:[
            {
          path:'listview',component:ListviewComponent
          },
          {
          path:'tasks',component: TasksComponent
          },
          {
          path:'nav-bar',component: NavBarComponent
          },
          {
          path:'carousel',component: CarouselComponent
          },
          {
          path:'DataTable',component: DatatableComponent
          },
          {
          path:'movablegrid',component: WidgetgridComponent
          },
          {
          path:'dragDrop',component: DragDropComponentComponent
          },
          {
          path:'converter',component: ConverterComponent
          },
          {
          path: 'persons',component: PeopleListComponent
          }
           ]
          }
        ]
      }
   ];
  
//export const appRouterModule = RouterModule.forRoot(routes);

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }