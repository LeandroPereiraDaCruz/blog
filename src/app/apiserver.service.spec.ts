import { TestBed, inject } from '@angular/core/testing';

import { ApiserverService } from './apiserver.service';

describe('ApiserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiserverService]
    });
  });

  it('should be created', inject([ApiserverService], (service: ApiserverService) => {
    expect(service).toBeTruthy();
  }));
});
