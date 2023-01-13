import { TestBed } from '@angular/core/testing';

import { DaftarkomikService } from './daftarkomik.service';

describe('DaftarkomikService', () => {
  let service: DaftarkomikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaftarkomikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
