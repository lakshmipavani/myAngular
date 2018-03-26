import { 
  Component, OnInit, Input, Output, OnChanges, EventEmitter, 
  trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalDialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() showSettingsMenu:boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() settingsMenuChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.showSettingsMenu = false;
    this.settingsMenuChange.emit(this.showSettingsMenu);
  }

}
