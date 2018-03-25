import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MainViewComponent } from './main-view/main-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MapViewComponent } from './map-view/map-view.component';
import { GoggleviewComponent } from './goggleview/goggleview.component';
import { AppInfoWindowComponent } from './goggleview/goggleview.component';
import { CraftviewComponent } from './craftview/craftview.component';
import { ProductsComponent } from './products/products.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


  // Route config let's you map routes to components
  const routes: Routes = [
      {
        path:'login',component:LoginComponent
      },
      {
        path:'newCustomerRegistration',component:RegisterComponent
      },
      {
        path: 'navBar',
        canActivate:[AuthGuard],
        component: NavbarComponent,
        children: [
          ]
      },
      {
            path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent
      },
      {
            path:'',component:MainViewComponent
      },
      {
            path:'mapsView',canActivate:[AuthGuard],component:MapViewComponent
      },
      {
            path:'googleView',canActivate:[AuthGuard],component:GoggleviewComponent
      },
      {
            path:'craftView',canActivate:[AuthGuard],component:CraftviewComponent
      },
      {
            path:'products',canActivate:[AuthGuard],component:ProductsComponent
      }
   ];
  
//export const appRouterModule = RouterModule.forRoot(routes);

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }