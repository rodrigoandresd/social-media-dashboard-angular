import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersSmComponent } from './followers-sm.component';

describe('FollowersSmComponent', () => {
  let component: FollowersSmComponent;
  let fixture: ComponentFixture<FollowersSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
