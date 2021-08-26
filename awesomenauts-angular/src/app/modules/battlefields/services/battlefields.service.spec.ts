import { TestBed } from '@angular/core/testing';

import { BattlefieldsService } from './battlefields.service';

describe('BattlefieldsService', () => {
  let service: BattlefieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattlefieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
