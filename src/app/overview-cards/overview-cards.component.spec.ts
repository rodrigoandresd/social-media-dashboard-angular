import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCardsComponent } from './overview-cards.component';

describe('OverviewCardsComponent', () => {
  let component: OverviewCardsComponent;
  let fixture: ComponentFixture<OverviewCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
