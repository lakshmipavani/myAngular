import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { CraftviewComponent } from './craftview/craftview.component';
import { ShopmenuComponent } from './shopmenu/shopmenu.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductsModule} from './products/products.module';
import { ProductsComponent} from './products/products.component';
import {ProductDetailsComponent} from './products/components/product-details/product-details.component';
import {ShoppingCartComponent} from './products/components/shopping-cart/shopping-cart.component';


import { LoginviewComponent } from './loginview/loginview.component';
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
          path:'shopMenu',component:ShopmenuComponent
          },
          {
          path:'products',component:ProductsComponent,
          children:[
             {
               path: 'details/:id',
               component: ProductDetailsComponent
             }
          ]
          },
          {
                    path: 'details/:id',
                    component: ProductDetailsComponent
                  },
          {
          path: 'craftPage',
          component: CraftviewComponent,
              children:[
                 {
                 path:'products',component:ProductsComponent,
                 children:[
                    {
                    path: 'product',
                    component: ProductComponent
                    },{
                    path: 'details/:id',
                    component: ProductDetailsComponent
                  }
                 ]
                 },
                 {
                    path: 'details/:id',
                    component: ProductDetailsComponent
                  },
                  {
                    path: 'cart',
                    component: ShoppingCartComponent
                  },
                   {
                    path: 'product',
                    component: ProductComponent,children:[
                      {
                        path: 'details/:id',
                        component: ProductDetailsComponent
                      }
                    ]
                  }
               ]
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
          },
          {
            path: 'craftPage',
            component: CraftviewComponent,
            children:[
               {
               path:'products',component:ProductsComponent
               }
             ]
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