import { TestBed, inject } from '@angular/core/testing';

import { TestAsyncService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAsyncService]
    });
  });

  it('should be created', inject([TestAsyncService], (service: TestAsyncService) => {
    expect(service).toBeTruthy();
  }));
});
