import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProjectService } from './create-project.service';

describe('CreateProjectService', () => {
  let service: CreateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(CreateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
