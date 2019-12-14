import { TestBed } from '@angular/core/testing';

import { UniversalInterceptor } from './universal.interceptor';

describe('UniversalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversalInterceptor = TestBed.get(UniversalInterceptor);
    expect(service).toBeTruthy();
  });
});
