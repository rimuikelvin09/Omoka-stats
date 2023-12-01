import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsStatsComponent } from './savings-stats.component';

describe('SavingsStatsComponent', () => {
  let component: SavingsStatsComponent;
  let fixture: ComponentFixture<SavingsStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsStatsComponent]
    });
    fixture = TestBed.createComponent(SavingsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
