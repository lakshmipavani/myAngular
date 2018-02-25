import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapViewComponent } from './map-view/map-view.component';
import { GoggleviewComponent } from './goggleview/goggleview.component';
import { AppInfoWindowComponent } from './goggleview/goggleview.component';


  // Route config let's you map routes to components
  const routes: Routes = [
      {
          path: '',
          component: AppComponent
      },
      {
        path: 'navbar',
        component: NavbarComponent,
        children: [
          ]
      },
      {
            path:'mapsView',component:MapViewComponent
      },
      {
            path:'googleView',component:GoggleviewComponent
      }
   ];
  
//export const appRouterModule = RouterModule.forRoot(routes);

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }