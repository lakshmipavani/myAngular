import { Component, OnInit} from '@angular/core';
import { LocationDetails } from '../location';
import { LocationService } from '../locationService';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})

export class MapViewComponent implements OnInit {

    _locationDetails:LocationDetails;

     constructor(private locationService:LocationService){
         this._locationDetails = locationService.getLocations();
     }
  
 ngOnInit() {}

}


