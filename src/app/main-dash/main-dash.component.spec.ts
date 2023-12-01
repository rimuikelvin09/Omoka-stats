import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashComponent } from './main-dash.component';

describe('MainDashComponent', () => {
  let component: MainDashComponent;
  let fixture: ComponentFixture<MainDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashComponent]
    });
    fixture = TestBed.createComponent(MainDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
