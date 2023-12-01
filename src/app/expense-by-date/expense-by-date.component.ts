import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-expense-by-date',
  templateUrl: './expense-by-date.component.html',
  styleUrls: ['./expense-by-date.component.scss'],
})
export class ExpenseByDateComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325,
    },
    title: {
      text: 'Monthly Expenses',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in Ksh',
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
      },
    },
    series: [
      {
        name: 'Food',
        type: 'line',
        color: '#0ec730',
        data: [
          2000, 5000, 3500, 4000, 7000, 5000, 8000, 3500, 4000, 4000, 3500,
        ],
      },
      {
        name: 'Transport',
        type: 'line',
        color: '#f50a2b',
        data: [
          5000, 5800, 6500, 7000, 5000, 5200, 7800, 5500, 3000, 5000, 6500,
        ],
      },
      {
        name: 'Home bills',
        type: 'line',
        color: '#ed9e20',
        data: [
          4000, 4000, 3500, 4000, 4000, 4200, 3800, 4500, 4000, 4500, 4500,
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
