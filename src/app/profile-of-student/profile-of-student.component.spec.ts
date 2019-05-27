import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfStudentComponent } from './profile-of-student.component';

describe('ProfileOfStudentComponent', () => {
  let component: ProfileOfStudentComponent;
  let fixture: ComponentFixture<ProfileOfStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOfStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
