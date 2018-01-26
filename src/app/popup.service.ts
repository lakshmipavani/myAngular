import {Injectable, EventEmitter} from '@angular/core';

export enum PopupEvent {
  OPEN, DESTROY, CLOSE
}


@Injectable()
export class PopupService {


  private currentPopupView: EventEmitter<any> = new EventEmitter<any>();
  private _isOpened: boolean = false;

  
  isOpened(): boolean {
    return this._isOpened;
  }

  open(component: any, providers?: Array<any>): void {
    if (this._isOpened) {
      this.destroy();
    }
    this.fireEvent(PopupEvent.OPEN, true, {
      component: component,
      providers: providers
    });
  }

 
  destroy() {
    this.fireEvent(PopupEvent.DESTROY, false);
  }

  
  close(): void {
    this.fireEvent(PopupEvent.CLOSE, false);
  }
  
  subscribe(generatorOrNext?: any, error?: any, complete?: any) {
   this.currentPopupView.subscribe(generatorOrNext, error, complete);
  }

  private fireEvent(name: PopupEvent, status: boolean, data?: any) {
    let _current = this._isOpened;
    this._isOpened = status;
    let event = {
      operation: name,
      status: {
        current: this._isOpened,
        old: _current
      },
    };
    if (typeof data === "object" && data != null) {
      Object.assign(event, data);
    }
    this.currentPopupView.emit(event);
  }

}
