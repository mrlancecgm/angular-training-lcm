import { TestBed } from '@angular/core/testing';

import { BarangayResolver } from './barangay.resolver';

describe('BarangayResolver', () => {
  let resolver: BarangayResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BarangayResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
