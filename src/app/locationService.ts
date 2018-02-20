import { Injectable } from '@angular/core';
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import { LocationDetails } from './location';

@Injectable()
export class LocationService {
  _LocationDetails<LocationDetails>=[
              {
                lat:51.678418,
                lng:7.809007,
                iconUrl:'/assets/wastebin-red.png'
              },{
                lat:52.678418,
                lng:6.809007,
                iconUrl:'/assets/wastebin-red.png'
              },
              {
               lat: 53.678418,
               lng:8.809007,
               iconUrl:'/assets/wastebin-red.png'
              },
              {
                lat:55.678418,
                lng:9.809007,
                iconUrl:'/assets/wastebin-red.png'
              },
              {
                lat:57.678418,
                lng:5.809007,
                iconUrl:'/assets/wastebin-red.png'
              }
      ];
  constructor() { }
  getLocations() {
         return this._LocationDetails;
     }
 }
