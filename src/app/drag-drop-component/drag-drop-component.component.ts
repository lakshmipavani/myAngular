import { Component} from '@angular/core';
import { Ng2DragDropModule } from '../../../node_modules/ng2-drag-drop';

@Component({
  selector: 'app-drag-drop-component',
  templateUrl: './drag-drop-component.component.html',
  styleUrls: ['./drag-drop-component.component.css']
})
export class DragDropComponentComponent{

  constructor() {}
  droppedItems =[];
  droppedItems2 =[];
   availableProducts =[{
      name:"Jacket",Quantity:2,price:90
   },{
      name:"Shirt",Quantity:10,price:100
   },{
      name:"Jeans",Quantity:20,price:500
   },{
      name:"trousers",Quantity:5,price:150
   }];
   items = [
            {name: "Apple", type: "fruit"},
            {name: "Carrot", type: "vegetable"},
            {name: "Orange", type: "fruit"}];
    onItemDrop2(e: any) {
        // Get the dropped data here
        if(this.droppedItems2.indexOf(e.dragData)>-1){
            console.log("item already exists in cart");
        }
        else{
            this.droppedItems2.push(e.dragData);
        }
    }
    onItemDrop(e: any) {
        // Get the dropped data here
        if(this.droppedItems.indexOf(e.dragData)>-1){
         
        }else{
           this.droppedItems.push(e.dragData);
        }
    }

}
