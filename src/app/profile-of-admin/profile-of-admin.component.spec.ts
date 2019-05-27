import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfAdminComponent } from './profile-of-admin.component';

describe('ProfileOfAdminComponent', () => {
  let component: ProfileOfAdminComponent;
  let fixture: ComponentFixture<ProfileOfAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOfAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
