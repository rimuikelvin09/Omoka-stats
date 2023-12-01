import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-leading-expense',
  templateUrl: './leading-expense.component.html',
  styleUrls: ['./leading-expense.component.scss'],
})
export class LeadingExpenseComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'Pie',
      height: 325,
    },
    title: {
      text: 'Expenses summary',
    },

    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
      },
    },
    series: [
      {
        name: 'Percentage',
        type: 'pie',
        data: [
          {
            name: 'Food',
            color: '#0ec730',
            y: 39.66,
          },
          {
            name: 'Transport',
            color: '#f50a2b',
            y: 49.92,
          },
          {
            name: 'Home bills',
            color: '#ed9e20',
            y: 10.42,
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });

  constructor() {}

  ngOnInit(): void {}
}
