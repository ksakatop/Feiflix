import { TestBed } from '@angular/core/testing';

import { PeliServiseService } from './peli-servise.service';

describe('PeliServiseService', () => {
  let service: PeliServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
