import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import {DataService} from '../data.service';
import {ApiService} from '../data.service';

import { IPosts } from '../person';

@Component({
  selector: 'app-craftitems',
  templateUrl: './craftitems.component.html',
  styleUrls: ['./craftitems.component.css']
})
export class CraftitemsComponent implements OnInit {
   private _itemHovered:boolean=false;
   imagesObject;
   imagesObjectValues;
   currentObject;
   foods;
   _postsArray: IPosts[];
   constructor(public viewContainerRef: ViewContainerRef,private http:Http,private dataService:DataService,private apiSerivce: ApiService) {
            }
  ngOnInit() {
        this.getImages();
  }
  getImages() {
    this.apiSerivce.getImagesObject().subscribe(
      data => { this.imagesObject = data}
    );
    this.imagesObject=Array.of(this.imagesObject);

    this.apiSerivce.getImagesObjectValues().subscribe(
      data => { this.imagesObjectValues = data}
    );
    //this.imagesObjectValues=Array.of(this.imagesObject);
  }
  hoverView(event){
     console.log(this._postsArray);
     if(event.type == "mouseenter"){
         let target = event.target;
         this._itemHovered=true;
         //this.imagesObject = JSON.parse(this.sampleData.data);
         this.currentObject = this.imagesObjectValues[event.currentTarget.id]?event.currentTarget.id:"";
         console.log(this.imagesObjectValues);
     }
  }
  editPopupClose($event){
        this._itemHovered=false;   
  }
  showDialogValue(event){
    this._itemHovered=false;
    console.log(this.currentObject);
    $(".description").show();
  }
}
