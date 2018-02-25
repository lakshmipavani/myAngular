import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MapViewComponent } from './map-view/map-view.component';

import { LocationService } from './locationService';
import { GoggleviewComponent } from './goggleview/goggleview.component';
import { AppInfoWindowComponent } from './goggleview/goggleview.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapViewComponent,
    GoggleviewComponent,
    AppInfoWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBlOmZdUxm037dt6VmBtVbkSHA4pilIlUE'
    })
  ],
  providers: [LocationService],
  entryComponents: [AppInfoWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
