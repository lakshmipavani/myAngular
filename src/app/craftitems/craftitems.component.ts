import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-craftitems',
  templateUrl: './craftitems.component.html',
  styleUrls: ['./craftitems.component.css']
})
export class CraftitemsComponent implements OnInit {
   _itemHovered;
   data;
   imagesObject;
  constructor(public viewContainerRef: ViewContainerRef,private http:Http) {
            this.http.get('https://jsoneditoronline.herokuapp.com/v1/docs/f3fb9e93655a651a14b7ae6fd0c8e882')
                          .subscribe(res => this.data = res.json()
                          );
                         // console.log(this.data);
                       this.imagesObject=this.data;
            }
  ngOnInit() {
  }
  hoverView(event){
     console.log(event+"hover event.");
     //this.shopContainer.createComponent(craftitemsComponent);
     // event.preventDefault();
     if(event.type == "mouseover"){
         let target = event.target;
         this._itemHovered = event.target.id;
         console.log(this.data);
     }else{
         let target = event.target;
         this._itemHovered = false;
         //target.style.background = 'none';
     }
  }
  showDialog(){
    console.log(event+"editted/deleted event.");
  }
}
