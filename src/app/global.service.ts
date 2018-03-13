import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService{
     visible:boolean;
     craftView:boolean;
     shopMenu:boolean;
     productMenu:boolean;
    
    constructor(){
      this.visible = true;
      this.craftView = false;
      this.shopMenu = false;
      this.productMenu = false;

    }
    
  hideMenu(){
     this.visible = false;
     this.craftView = true;
  }
  showMenu(){
     this.visible = true;
     this.craftView = false;
  }

  hideCraftView(){
     this.craftView = false;
     this.visible = true;
  }
  showCraftView(){
      this.craftView = true;
      this.visible = false;
  }

  hideShopMenu(){
      this.shopMenu = false;
      //this.craftView = true;
      this.visible = false;
  }
  showShopMenu(){
      this.shopMenu = true;
      this.craftView = false;
  }
  showProductMenu(){
      this.productMenu = true;
      this.craftView = false;
  }
}