import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
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
   sampleData;
   imagesObject;
   currentObject;
   foods;
   _postsArray: IPosts[];
   constructor(public viewContainerRef: ViewContainerRef,private http:Http,private dataService:DataService,private apiSerivce: ApiService) {
            }
  ngOnInit() {
        this.getImages();
  }
  getImages() {
    this.apiSerivce.getFoods().subscribe(
      data => { this.imagesObject = data}
    );
    this.imagesObject=Array.of(this.imagesObject);
    console.log(this.imagesObject);
  }
  hoverView(event){
     console.log(this._postsArray);
     if(event.type == "mouseenter"){
         let target = event.target;
         this._itemHovered=true;
         //this.imagesObject = JSON.parse(this.sampleData.data);
         this.currentObject = event.currentTarget.id;
         console.log(this.imagesObject);
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
