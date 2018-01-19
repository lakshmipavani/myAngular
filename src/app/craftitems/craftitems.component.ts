import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import {Http} from '@angular/http';
import * as $ from 'jquery';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-craftitems',
  templateUrl: './craftitems.component.html',
  styleUrls: ['./craftitems.component.css']
})
export class CraftitemsComponent implements OnInit {
   private _itemHovered:boolean=false;
   data;
   imagesObject;
   currentObject;
   private dataRetrieved:boolean=false;
  constructor(public viewContainerRef: ViewContainerRef,private http:Http) {
            this.http.get('https://jsoneditoronline.herokuapp.com/v1/docs/7d1144556dcbcb6d207e23474dc78a8a')
                          .subscribe(res => this.data = res.json()
                          );
                         // console.log(this.data);
                       this.imagesObject=this.data;
            }
  ngOnInit() {
  }
  sampleData($event){
  this.dataRetrieved=true;
   this.imagesObject = JSON.parse(this.data.data);
  }
  hoverView(event){
     console.log(event+"hover event.");
     //this.shopContainer.createComponent(craftitemsComponent);
     // event.preventDefault();
     if(event.type == "mouseenter"){
         let target = event.target;
         //this._itemHovered = event.target.id;
         this._itemHovered=true;
         //this.imagesObject=this.data;
         this.imagesObject = JSON.parse(this.data.data);
         this.currentObject = this.imagesObject[event.currentTarget.id]?event.currentTarget.id:"";
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
