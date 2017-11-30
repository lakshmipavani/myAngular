import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftitemsComponent } from './craftitems.component';

describe('CraftitemsComponent', () => {
  let component: CraftitemsComponent;
  let fixture: ComponentFixture<CraftitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
