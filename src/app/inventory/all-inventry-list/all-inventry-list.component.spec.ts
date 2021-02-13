import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInventryListComponent } from './all-inventry-list.component';

describe('AllInventryListComponent', () => {
  let component: AllInventryListComponent;
  let fixture: ComponentFixture<AllInventryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInventryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInventryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
