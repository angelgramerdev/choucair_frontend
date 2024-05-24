import { TestBed } from '@angular/core/testing';

import { SingupService } from './signup.service';

describe('SingupService', () => {
  let service: SingupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
