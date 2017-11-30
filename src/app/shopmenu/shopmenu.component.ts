import { Component,OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { GlobalVariableService } from '../global.service';
import { CraftitemsComponent } from '../craftitems/craftitems.component';

@Component({
  selector: 'app-shopmenu',
  templateUrl: './shopmenu.component.html',
  styleUrls: ['./shopmenu.component.css']
})
export class ShopmenuComponent implements OnInit {
  private hoveredMenu:boolean=false;

  @ViewChild('shopContainer', {read: ViewContainerRef})

  shopContainer: ViewContainerRef;
  
  constructor(public globalVariableService: GlobalVariableService,public componentFactoryResolver: ComponentFactoryResolver) {
      globalVariableService.showShopMenu();
      const craftitemsComponent = this.componentFactoryResolver.resolveComponentFactory(CraftitemsComponent);

       setTimeout(()=>{
        // at this point we want the "child" component to be rendered into the app.component:
        this.shopContainer.createComponent(craftitemsComponent);
       }, 1000);
     
  }
  goToCraftView(){
    this.globalVariableService.hideShopMenu();
  }
  ngOnInit() {
  }
  menuToggle(event){
      this.hoveredMenu = !this.hoveredMenu;
      //event.preventDefault();
  }
  selectValue(event){
      //this.shopContainer.createComponent(craftitemsComponent);
     // event.preventDefault();
  }
  
}

