import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnDetailComponent } from './sales-return-detail.component';

describe('SalesReturnDetailComponent', () => {
  let component: SalesReturnDetailComponent;
  let fixture: ComponentFixture<SalesReturnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
