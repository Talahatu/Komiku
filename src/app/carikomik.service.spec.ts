import { TestBed } from '@angular/core/testing';

import { CarikomikService } from './carikomik.service';

describe('CarikomikService', () => {
  let service: CarikomikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarikomikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
