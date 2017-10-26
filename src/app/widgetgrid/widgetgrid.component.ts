import { Component} from '@angular/core';
import { NgxWidgetGridModule } from '../../../node_modules/ngx-widget-grid/dist';

@Component({
  selector: 'app-widgetgrid',
  templateUrl: './widgetgrid.component.html',
  styleUrls: ['./widgetgrid.component.css']
})
export class WidgetgridComponent {
  name:string;
  constructor() { this.name = `ngx widget grid` }
  pos = {
    top: 2,
    left: 2,
    height: 1,
    width: 1
  };

  onWidgetChange(pos: any) {
    console.log('position changed : ', pos);
  }
}