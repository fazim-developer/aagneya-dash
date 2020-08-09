import { TestBed } from '@angular/core/testing';

import { AuthSecGuard } from './auth-sec.guard';

describe('AuthSecGuard', () => {
  let guard: AuthSecGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSecGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
