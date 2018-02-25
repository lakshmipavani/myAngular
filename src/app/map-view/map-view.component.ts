import { Component, OnInit} from '@angular/core';
import { LocationDetails } from '../location';
import { LocationService } from '../locationService';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})

export class MapViewComponent implements OnInit {

    _locationDetails;
    zoom: number = 15;
    latitude: number = 51.673858;
    longitude: number = 7.815982;

     constructor(private locationService:LocationService){
         this._locationDetails = locationService.getLocations();
     }
  
     ngOnInit() {}

    

}


