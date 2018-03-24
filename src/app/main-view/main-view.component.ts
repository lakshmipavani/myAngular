import { Component, OnInit } from '@angular/core';
declare var L: any;
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/timtuity/citdzqqoz009d2jo6gfxz29nf/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'Map data &copy;',
	    maxZoom: 18,
	    id: 'mapbox.satellite',
	    accessToken: 'pk.eyJ1IjoidGltdHVpdHkiLCJhIjoicm5rOHVFSSJ9.9Zl65ucEq3ClmtRo1hHGRw'
   }).addTo(mymap);
  }

}
