import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import {TranslateModule} from "ng2-translate";



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MapViewComponent } from './map-view/map-view.component';

import { LocationService } from './locationService';
import { GlobalVariableService } from './global.service';
import { CartService } from './cart.service';
import { ProductsService } from './products.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';


import { GoggleviewComponent } from './goggleview/goggleview.component';
import { AppInfoWindowComponent } from './goggleview/goggleview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CraftviewComponent } from './craftview/craftview.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapViewComponent,
    GoggleviewComponent,
    AppInfoWindowComponent,
    DashboardComponent,
    CraftviewComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ModalDialogComponent,
    LoginComponent,
    RegisterComponent,
    MainViewComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule,
    TranslateModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlOmZdUxm037dt6VmBtVbkSHA4pilIlUE'
    })
  ],
  providers: [LocationService,GlobalVariableService,ProductsService,CartService,UserService,AuthGuard],
  entryComponents: [AppInfoWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
