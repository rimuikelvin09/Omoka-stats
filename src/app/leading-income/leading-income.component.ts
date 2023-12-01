import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-leading-income',
  templateUrl: './leading-income.component.html',
  styleUrls: ['./leading-income.component.scss'],
})
export class LeadingIncomeComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'Pie',
      height: 325,
    },
    title: {
      text: 'Income summary',
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
            name: 'Benchmark Building Solutions',
            color: '#ff000f',
            y: 47.83,
          },
          {
            name: 'AlphaTech Insights',
            color: '#e8ca00',
            y: 44.74,
          },
          {
            name: 'Modern Rabbit Demo farm',
            color: '#080dff',
            y: 7.43,
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
