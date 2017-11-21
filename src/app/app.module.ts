import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { Ng2DragDropModule } from '../../node_modules/ng2-drag-drop';

import {NgxWidgetGridModule} from '../../node_modules/ngx-widget-grid/dist';
//import { NgxWidgetGridModule } from '../../node_modules/ngx-widget-grid/dist';


import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';

//import {appRouterModule} from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { ListviewComponent } from './listview/listview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AnimationComponent } from './animation/animation.component';
import { DatatableComponent } from './datatable/datatable.component';
//import { HighchartsComponent } from './highcharts/highcharts.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { WidgetgridComponent } from './widgetgrid/widgetgrid.component';
import { DragDropComponentComponent } from './drag-drop-component/drag-drop-component.component';
import { ConverterComponent } from './converter/converter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginLayoutComponentComponent } from './login-layout-component/login-layout-component.component';
import { DashboardLayoutComponentComponent } from './dashboard-layout-component/dashboard-layout-component.component';

import { SideBarComponent } from './sidebar/sidebar.component';
import { CraftviewComponent } from './craftview/craftview.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxWidgetGridModule,
    //ChartModule.forRoot(require('highcharts')),
    Ng2DragDropModule.forRoot(),
    AppRoutingModule//new routing module
  ],
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    TasksComponent,
    ListviewComponent,
    NavBarComponent,
    CarouselComponent,
    AnimationComponent,
    DatatableComponent,
    //HighchartsComponent,
    LoginviewComponent,
    WidgetgridComponent,
    DragDropComponentComponent,
    ConverterComponent,
    FooterComponent,
    HeaderComponent,
    LoginLayoutComponentComponent,
    DashboardLayoutComponentComponent,
    SideBarComponent,
    CraftviewComponent
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
