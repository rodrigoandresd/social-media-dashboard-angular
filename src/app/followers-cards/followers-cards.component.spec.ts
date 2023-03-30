import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersCardsComponent } from './followers-cards.component';

describe('FollowersCardsComponent', () => {
  let component: FollowersCardsComponent;
  let fixture: ComponentFixture<FollowersCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
