import { TestBed } from '@angular/core/testing';

import { SocialShareService } from './social-share.service';

describe('SocialShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialShareService = TestBed.get(SocialShareService);
    expect(service).toBeTruthy();
  });
});
