import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoggleviewComponent } from './goggleview.component';

describe('GoggleviewComponent', () => {
  let component: GoggleviewComponent;
  let fixture: ComponentFixture<GoggleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoggleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoggleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
