import { TestBed } from '@angular/core/testing';

import { NautsService } from './nauts.service';

describe('NautsService', () => {
  let service: NautsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NautsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
