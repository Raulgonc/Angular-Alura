import { TestBed } from '@angular/core/testing';

import { Pensamentos } from './pensamentos';

describe('Pensamentos', () => {
  let service: Pensamentos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pensamentos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
