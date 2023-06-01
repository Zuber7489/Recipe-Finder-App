import { TestBed } from '@angular/core/testing';

import { RecipeFinderService } from './recipe-finder.service';

describe('RecipeFinderService', () => {
  let service: RecipeFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
