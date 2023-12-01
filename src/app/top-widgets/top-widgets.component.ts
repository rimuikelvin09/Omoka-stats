import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMoneyBillTrendUp,
  faSackXmark,
  faMoneyBillTransfer,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss'],
})
export class TopWidgetsComponent implements OnInit {
  faMoneyBillTrendUp = faMoneyBillTrendUp;
  faSackXmark = faSackXmark;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faBell = faBell;

  constractor() {}

  ngOnInit(): void {}
}
