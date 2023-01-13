import { TestBed } from '@angular/core/testing';

import { DetailkomikService } from './detailkomik.service';

describe('DetailkomikService', () => {
  let service: DetailkomikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailkomikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
