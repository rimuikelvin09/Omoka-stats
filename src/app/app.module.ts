import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { IncomeByDateComponent } from './income-by-date/income-by-date.component';
import { RemidersComponent } from './remiders/remiders.component';
import { LeadingExpenseComponent } from './leading-expense/leading-expense.component';
import { LeadingIncomeComponent } from './leading-income/leading-income.component';
import { SavingsStatsComponent } from './savings-stats/savings-stats.component';
import { ExpenseByDateComponent } from './expense-by-date/expense-by-date.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { Component } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainDashComponent,
    TopWidgetsComponent,
    IncomeByDateComponent,
    RemidersComponent,
    LeadingExpenseComponent,
    LeadingIncomeComponent,
    SavingsStatsComponent,
    ExpenseByDateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
