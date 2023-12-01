import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDashboard,
  faMoneyBillTrendUp,
  faSackXmark,
  faMoneyBillTransfer,
  faCog,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  faDashboard = faDashboard;
  faMoneyBillTrendUp = faMoneyBillTrendUp;
  faSackXmark = faSackXmark;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faCog = faCog;
  faBell = faBell;

  @Output() componentSelected = new EventEmitter<string>();

  onItemClick(component: string): void {
    this.componentSelected.emit(component);
  }

  constructor() {}

  ngOnInit(): void {}
}
