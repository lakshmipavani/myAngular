import { Component, OnInit ,Inject} from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})

export class DetailviewComponent{
  id: string;
  constructor(
    private popupService: PopupService,
    @Inject("sample") id: string
  ) {
    this.id = id;
  }

  close() {
   this.popupService.close();
  }
}
