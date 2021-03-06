import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { ListviewComponent } from './listview/listview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PopupComponent } from './popup/popup.component';

  // Route config let's you map routes to components
  const routes: Routes = [
      // map '/persons' to the people list component
      {
        path: 'persons',
        component: PeopleListComponent
      },
      {
        path: 'persons/:id',
        component: PersonDetailsComponent
      },
      // map '/' to '/persons' as our default route
      {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
      },
      {
      path:'listview',
      component:ListviewComponent
      },
      {
      path:'tasks',
      component: TasksComponent
      },
      {
      path:'nav-bar',
      component: NavBarComponent
      },{
      path:'carousel',
      component: CarouselComponent
      },
      {
      path:'popupView',
      component: PopupComponent
      }
   ];

//export const appRouterModule = RouterModule.forRoot(routes);

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }