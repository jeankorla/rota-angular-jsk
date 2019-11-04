import { TestBed } from '@angular/core/testing';

import { QuemSomosService } from './quem-somos.service';

describe('QuemSomosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuemSomosService = TestBed.get(QuemSomosService);
    expect(service).toBeTruthy();
  });
});
