import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfStaffComponent } from './profile-of-staff.component';

describe('ProfileOfStaffComponent', () => {
  let component: ProfileOfStaffComponent;
  let fixture: ComponentFixture<ProfileOfStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOfStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOfStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
