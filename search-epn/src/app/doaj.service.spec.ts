import { TestBed, inject } from '@angular/core/testing';

import { DoajService } from './doaj.service';

describe('DoajService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoajService]
    });
  });

  it('should be created', inject([DoajService], (service: DoajService) => {
    expect(service).toBeTruthy();
  }));
});
