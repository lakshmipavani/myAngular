import { Component, OnInit ,NgZone} from '@angular/core';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

import {TranslateService} from 'ng2-translate';

import { ChangeDetectorRef } from '@angular/core';

declare var L: any;
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  showSettingsTab:boolean;
  //showSettingsPage:boolean;
  showSettingsPage=false;
  showMapView:boolean;
  //constructor(private cdRef:ChangeDetectorRef) {
  //  this.showMapView=true;
  //}
  constructor(private translate: TranslateService) {
        this.showMapView=true;

        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/timtuity/citdzqqoz009d2jo6gfxz29nf/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'Map data &copy;',
	    maxZoom: 18,
	    id: 'mapbox.satellite',
	    accessToken: 'pk.eyJ1IjoidGltdHVpdHkiLCJhIjoicm5rOHVFSSJ9.9Zl65ucEq3ClmtRo1hHGRw'
   }).addTo(mymap);
   //Add Marker to map
   var markers=[];
        var marker = L.marker([51.505, -0.09]).addTo(mymap).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
        //marker.on("popupopen", this.onPopupOpen);  
        //marker.name="TESTNAMEMARKER1";
        //markers.push(marker);
  }
  settingsTabSelected(e){
    this.showSettingsPage=true;
    this.showMapView=false;
  }
  mapViewTabSelected(e){
    this.showMapView=true;
    this.showSettingsPage=false;
  }
  onPopupOpen(){
        //this.tempMarker=this;
        // Show Marker.name
        //this.markersname = this.tempMarker.name;

        //this.cdRef.detectChanges();
    }
}
