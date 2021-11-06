import { TestBed } from '@angular/core/testing';

import { CreateProjectService } from './create-project.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('CreateProjectService', () => {
  let service: CreateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CreateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
