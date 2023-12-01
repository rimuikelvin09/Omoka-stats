import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingExpenseComponent } from './leading-expense.component';

describe('LeadingExpenseComponent', () => {
  let component: LeadingExpenseComponent;
  let fixture: ComponentFixture<LeadingExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadingExpenseComponent]
    });
    fixture = TestBed.createComponent(LeadingExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
