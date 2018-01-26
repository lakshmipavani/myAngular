import {
  Component, OnDestroy, OnInit, ReflectiveInjector, Injector, ComponentFactoryResolver
} from '@angular/core';
import {PopupService, PopupEvent} from '../popup.service';
import {ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { DetailviewComponent } from '../detailview/detailview.component';


@Component({
  selector: 'popup-overflow',
  templateUrl: './popup.component.html'
  
})
export class Popup implements OnDestroy, OnInit {
  loading: false;
  subscribers:any [];
  constructor(private popupService: PopupService,
              private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }


  ngOnInit() {
    this.subscribers.push(
      this.popupService.subscribe((data) => {
        if (!!data && data.operation === PopupEvent.OPEN) {
          this.open(data);
        } else if (data &&
          (
            data.operation === PopupEvent.CLOSE ||
            data.operation === PopupEvent.DESTROY
          )
        ) {
          this.close();
        }
      })
    );
  }

  ngOnDestroy() {
    if (this.subscribers) {
      this.subscribers.forEach(item => item.unsubscribe());
      this.subscribers = null;
    }
  }

  private open(data) {
    //this.loading = true;
    let providers = data.providers || [];
    let injector = ReflectiveInjector.resolveAndCreate(providers, this.injector);
    let factory = this.componentFactoryResolver.resolveComponentFactory(data.component);
  
    setTimeout(() => {
      this.loading = false;
      this.viewContainerRef.createComponent(factory, 0, injector);
    }, 1000);
  }

  private close() {
    this.viewContainerRef.detach(0);
  }
}
