import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftviewComponent } from './craftview.component';

describe('CraftviewComponent', () => {
  let component: CraftviewComponent;
  let fixture: ComponentFixture<CraftviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
