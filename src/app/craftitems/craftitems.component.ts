import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-craftitems',
  templateUrl: './craftitems.component.html',
  styleUrls: ['./craftitems.component.css']
})
export class CraftitemsComponent implements OnInit {
   _itemHovered;
  constructor(public viewContainerRef: ViewContainerRef) {
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
