import { TestBed, inject } from '@angular/core/testing';

import { DrugserviceService } from './drugservice.service';

describe('DrugserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugserviceService]
    });
  });

  it('should be created', inject([DrugserviceService], (service: DrugserviceService) => {
    expect(service).toBeTruthy();
  }));
});
