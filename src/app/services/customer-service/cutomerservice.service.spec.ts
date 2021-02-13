import { TestBed } from '@angular/core/testing';

import { CutomerserviceService } from './cutomerservice.service';

describe('CutomerserviceService', () => {
  let service: CutomerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutomerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
