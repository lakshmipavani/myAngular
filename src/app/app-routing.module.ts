import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapViewComponent } from './map-view/map-view.component';
import { GoggleviewComponent } from './goggleview/goggleview.component';
import { AppInfoWindowComponent } from './goggleview/goggleview.component';
import { CraftviewComponent } from './craftview/craftview.component';
import { ProductsComponent } from './products/products.component';


  // Route config let's you map routes to components
  const routes: Routes = [
      {
        path: '',
        component: NavbarComponent,
        children: [
          ]
      },
      {
            path:'dashboard',component:DashboardComponent
      },
      {
            path:'mapsView',component:MapViewComponent
      },
      {
            path:'googleView',component:GoggleviewComponent
      },
      {
            path:'craftView',component:CraftviewComponent
      },
      {
            path:'products',component:ProductsComponent
      }
   ];
  
//export const appRouterModule = RouterModule.forRoot(routes);

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }