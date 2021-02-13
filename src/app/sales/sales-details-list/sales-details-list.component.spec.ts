import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDetailsListComponent } from './sales-details-list.component';

describe('SalesDetailsListComponent', () => {
  let component: SalesDetailsListComponent;
  let fixture: ComponentFixture<SalesDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
