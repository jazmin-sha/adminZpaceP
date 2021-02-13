import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBoyTrackComponent } from './delivery-boy-track.component';

describe('DeliveryBoyTrackComponent', () => {
  let component: DeliveryBoyTrackComponent;
  let fixture: ComponentFixture<DeliveryBoyTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryBoyTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBoyTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
