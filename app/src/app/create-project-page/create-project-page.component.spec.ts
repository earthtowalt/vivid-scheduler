import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CreateProjectPageComponent } from './create-project-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CreateProjectService } from '../create-project.service';

describe('CreateProjectPageComponent', () => {
  let component: CreateProjectPageComponent;
  let fixture: ComponentFixture<CreateProjectPageComponent>;

  // this initailization is bad. I should just declare the type
  let createProjectServiceSpy = jasmine.createSpyObj('CreateProjectService', ['addProject']);

  beforeEach(async () => {

    // create spy object for the CreateProjectService
    createProjectServiceSpy = jasmine.createSpyObj('CreateProjectService', ['addProject']);

    // set the return value for the spy object
    const stubValue = {subscribe: () => 'OK!'};
    createProjectServiceSpy.addProject.and.returnValue(stubValue);

    await TestBed.configureTestingModule({
      providers: [ {
        provide: CreateProjectService, 
        useValue: createProjectServiceSpy} 
      ],
      declarations: [ CreateProjectPageComponent ], 
      imports: [ HttpClientTestingModule, FormsModule ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ensure correct fields
  it('Should render submit button', () => {
    
  });

  // onSubmit calls correct service method
  it('should call createProjectService.addProject', () => {

      // create a mock form component
      const mockComponent = new CreateProjectPageComponent(createProjectServiceSpy);


      // set a dummy data value and submit the mock form
      const dummyData = {pname: 'Project 1', startDate: new Date()};
      mockComponent.onSubmit(dummyData);

      expect(createProjectServiceSpy.addProject.calls.count()).toEqual(1, 'submit service was called once');

  });

  // enforce required fields 
  it('should not submit form with invalid data', fakeAsync(() => {

    // tick for form controls to register
    tick();

    // submit form with bad data
    expect(() => component.onSubmit('invalid data')).toThrowError();

    expect(component.submitted).toEqual(false);

  }));

  // test positive case
  it('should submit form with good data', fakeAsync(() => {

    // tick for form controls to register
    tick();

    // submit form with good data
    component.onSubmit({pname: 'Project 1', startDate: new Date()});

    expect(component.submitted).toEqual(true);

  }));

});
