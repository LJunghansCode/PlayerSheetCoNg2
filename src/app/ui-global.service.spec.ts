import { TestBed, inject } from '@angular/core/testing';

import { UiGlobalService } from './ui-global.service';

describe('UiGlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiGlobalService]
    });
  });

  it('should ...', inject([UiGlobalService], (service: UiGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
