import { TestBed } from '@angular/core/testing';

import { GetDBDataService } from './get-dbdata.service';

describe('GetDBDataService', () => {
  let service: GetDBDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDBDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
