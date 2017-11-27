import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutComponentComponent } from './dashboard-layout-component.component';

describe('DashboardLayoutComponentComponent', () => {
  let component: DashboardLayoutComponentComponent;
  let fixture: ComponentFixture<DashboardLayoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLayoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
