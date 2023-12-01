import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseByDateComponent } from './expense-by-date.component';

describe('ExpenseByDateComponent', () => {
  let component: ExpenseByDateComponent;
  let fixture: ComponentFixture<ExpenseByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseByDateComponent]
    });
    fixture = TestBed.createComponent(ExpenseByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
