import { Component, OnInit } from '@angular/core';
import { IncomeByDateComponent } from '../income-by-date/income-by-date.component';
import { ExpenseByDateComponent } from '../expense-by-date/expense-by-date.component';
import { RemidersComponent } from '../remiders/remiders.component';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss'],
})
export class MainDashComponent implements OnInit {
  selectedComponent: any;

  onComponentSelected(component: string): void {
    switch (component) {
      case 'main-dash':
        this.selectedComponent = MainDashComponent;
        break;

      case 'income-by-date':
        console.log('income by date selected');
        this.selectedComponent = IncomeByDateComponent;
        break;

      case 'expense-by-date':
        this.selectedComponent = ExpenseByDateComponent;
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
