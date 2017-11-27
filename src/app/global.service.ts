import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableService{
     visible:boolean;
     craftView:boolean;
     shopMenu:boolean;
    
    constructor(){
      this.visible = true;
      this.craftView = false;
      this.shopMenu = false;

    }
    
  hideMenu(){
     this.visible = false;
  }
  showMenu(){
     this.visible = true;
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
      this.craftView = true;
  }
  showShopMenu(){
      this.shopMenu = true;
      this.craftView = false;
  }
}