import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingIncomeComponent } from './leading-income.component';

describe('LeadingIncomeComponent', () => {
  let component: LeadingIncomeComponent;
  let fixture: ComponentFixture<LeadingIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadingIncomeComponent]
    });
    fixture = TestBed.createComponent(LeadingIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
