import { TestBed } from '@angular/core/testing';

import { SimpsonsApiService } from './simpsons';

describe('SimpsonsApiService', () => {
  let service: SimpsonsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpsonsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});