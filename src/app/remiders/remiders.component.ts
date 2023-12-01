import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remiders',
  templateUrl: './remiders.component.html',
  styleUrls: ['./remiders.component.scss'],
})
export class RemidersComponent implements OnInit {
  reminders = [
    {
      id: 1,
      title: 'Rent',
      Due: '2-Nov-2023',
      Ammount: '13,000 Ksh',
      Priority: 'High',
    },
    {
      id: 2,
      title: 'Wi-Fi',
      Due: '15-Nov-2023',
      Ammount: '3,000 Ksh',
      Priority: 'Intermediate',
    },
    {
      id: 3,
      title: 'Electricity',
      Due: '3-Nov-2023',
      Ammount: '1,000 Ksh',
      Priority: 'High',
    },
    {
      id: 4,
      title: 'Gym',
      Due: '6-Nov-2023',
      Ammount: '6,000 Ksh',
      Priority: 'Intermediate',
    },
    {
      id: 5,
      title: 'Divi Theme Builder',
      Due: '22-Nov-2023',
      Ammount: '12,650 Ksh',
      Priority: 'Low',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
