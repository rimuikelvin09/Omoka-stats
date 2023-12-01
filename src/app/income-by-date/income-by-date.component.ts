import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-income-by-date',
  templateUrl: './income-by-date.component.html',
  styleUrls: ['./income-by-date.component.scss'],
})
export class IncomeByDateComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'column',
      height: 325,
    },
    title: {
      text: 'Monthly Income',
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
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Benchmark Building Solutions',
        type: 'column',
        color: '#ff000f',
        data: [
          10000, 10000, 10000, 10000, 10000, 20000, 20000, 20000, 20000, 20000,
          20000,
        ],
      },
      {
        name: 'AlphaTech Insights',
        type: 'column',
        color: '#e8ca00',
        data: [1500, 15000, 15000, 0, 0, 30000, 40000, 20000, 0, 20000, 17500],
      },
      {
        name: 'Modern Rabbit Demo farm',
        type: 'column',
        color: '#080dff',
        data: [10000, 6000, 3000, 3600, 1800, 0, 0, 0, 0, 1200, 800],
      },
    ],
    credits: {
      enabled: false,
    },
  });
  constructor() {}

  ngOnInit(): void {}
}
