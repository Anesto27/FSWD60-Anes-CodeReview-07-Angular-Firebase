import { TestBed, inject } from '@angular/core/testing';

import { BookPageService } from './book-page.service';

describe('BookPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookPageService]
    });
  });

  it('should be created', inject([BookPageService], (service: BookPageService) => {
    expect(service).toBeTruthy();
  }));
});
