import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdataComponent } from './studentdata.component';

describe('StudentdataComponent', () => {
  let component: StudentdataComponent;
  let fixture: ComponentFixture<StudentdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentdataComponent]
    });
    fixture = TestBed.createComponent(StudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
