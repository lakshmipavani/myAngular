//our root app component
import { Component, NgModule,ApplicationRef, ComponentFactoryResolver, ComponentRef,Injector,NgZone,EventEmitter
} from '@angular/core'


declare var google: any;

@Component({
  selector: 'app-info-view-element',
  template: `
    <div>Example passing params: {{ param }}</div>
    <div>
      Counter <button (click)="increment()">Increment</button> {{ counter }} 
    </div>
  `
})
export class AppInfoWindowComponent {
  param: any;
  counter: number = 0;

  onCounterIncremented = new EventEmitter();
  increment() {
    this.onCounterIncremented.emit(++this.counter);
  }
}

@Component({
  selector: 'smaple-app',
  template: `
    <app-navbar></app-navbar>
    <div id="gmap" style="height:93%;"></div>
  `
})
export class GoggleviewComponent {
  placeInfoWindow: any;
  map: any;
  compRef: ComponentRef<AppInfoWindowComponent>;
  
  counter: number; // just for parent-child communication

  constructor(private injector: Injector, 
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private zone: NgZone) {
  }

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('gmap'), {
      center: { lat: -33.866, lng: 151.196 },
      zoom: 15
    }); 
    
    this.placeInfoWindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-33.866, 151.196)
    });

    marker.addListener('click', (e) => { 
      // we need to run it in angular2 zone
      this.zone.run(() => this.onMarkerClick(marker, e));
    });

    this.placeInfoWindow.addListener('closeclick', _ => {
       this.compRef.destroy();
    });
  }

 onMarkerClick(marker, e) {
    if(this.compRef) this.compRef.destroy();
    
    // creation component, AppInfoWindowComponent should be declared in entryComponents
    const compFactory = this.resolver.resolveComponentFactory(AppInfoWindowComponent);
    this.compRef = compFactory.create(this.injector);
        
    // example of parent-child communication
    this.compRef.instance.param = "test";
    const subscription = this.compRef.instance.onCounterIncremented.subscribe(x => { this.counter = x; });  
    
    let div = document.createElement('div');
    div.appendChild(this.compRef.location.nativeElement);
    
    this.placeInfoWindow.setContent(div);
    this.placeInfoWindow.open(this.map, marker);

    // it's necessary for change detection within AppInfoWindowComponent
    this.appRef.attachView(this.compRef.hostView);
    this.compRef.onDestroy(() => {
      this.appRef.detachView(this.compRef.hostView);
      subscription.unsubscribe();
     });
  }

}
