import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfParentComponent } from './profile-of-parent.component';

describe('ProfileOfParentComponent', () => {
  let component: ProfileOfParentComponent;
  let fixture: ComponentFixture<ProfileOfParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOfParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOfParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
