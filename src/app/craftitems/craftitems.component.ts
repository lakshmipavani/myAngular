import { Component, OnInit,  OnChanges, EventEmitter, 
  trigger, state, style, animate, transition } from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import {DataService} from '../data.service';
import {ApiService} from '../data.service';
import { IPosts } from '../person';
import { Popup } from '../popup/popup.component';
import { PopupService } from '../popup.service';
import { DetailviewComponent } from '../detailview/detailview.component';

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
   showDialog = false;
   visible;
   _postsArray: IPosts[];
   constructor(private http:Http,private dataService:DataService,private apiService: ApiService,
   private popupService:PopupService) {
            }
  ngOnInit() {
        this.getImages();
  }
  getImages() {
    this.apiService.getImagesObject().subscribe(
      data => { this.imagesObject = data}
    );
    this.imagesObject=Array.of(this.imagesObject);

    this.apiService.getImagesObjectValues().subscribe(
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
   openPopup() {
   this.popupService.open(DetailviewComponent, [
     {
       provide: "sample", useValue: "ejhferkjfberkhb"
     }
   ]);
 }
}
