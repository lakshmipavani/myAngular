import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetgridComponent } from './widgetgrid.component';

describe('WidgetgridComponent', () => {
  let component: WidgetgridComponent;
  let fixture: ComponentFixture<WidgetgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
