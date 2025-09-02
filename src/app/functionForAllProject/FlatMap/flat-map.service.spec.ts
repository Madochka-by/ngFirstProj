import { TestBed } from '@angular/core/testing';

import { FlatMapService } from './flat-map.service';

describe('FlatMapService', () => {
  let service: FlatMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
