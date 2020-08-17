import { Component, OnInit } from '@angular/core';
import {DateRange} from '@angular/material/datepicker';
import {MenuService} from '../../service/menu.service';
import {LoaderService} from '../../service/loader.service';
import {OrderService} from '../../service/order.service';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  WEEK_NAME = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
  ];

  MONTH_NAME = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  now = new Date();
  choiceDate = new Date();
  dates: Date[] = [];
  activeDates: Date[] = [];
  orderDates: string[] = [];

  constructor(private menuService: MenuService,
              private datePipe: DatePipe,
              private authService: AuthService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.menuService.menuDateInitObserver.subscribe(
      result => {
        if (result) {
          this.dates = result.dates;
          this.activeDates = result.activeDates;
          this.setChoiceDate(result.activeDate);
          if (this.authService.userValue) {
            console.log('dates: ' + result.activeDates);
            this.orderService.orderDates(this.activeDates).subscribe(
              dates => {
                this.orderDates = dates;
              });
          }
        }
      });
  }


  setChoiceDate(date: Date): void {
    this.choiceDate = date;
    this.menuService.changeMenuDate(date);
  }

  dateEquals(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear()
      && d1.getMonth() === d2.getMonth()
      && d1.getDate() === d2.getDate()
      && d1.getDay() === d2.getDay();
  }

  inActiveDates(d1: Date): boolean {
    if (this.activeDates.length === 0) {
      return false;
    }

    for (const d2 of this.activeDates) {
      if (this.dateEquals(d1, d2)) {
        return true;
      }
    }

    return false;
  }

  inOrderActiveDates(d1: Date): boolean {
    const date = this.datePipe.transform(d1, 'yyyy-MM-dd');
    if (this.orderDates.length === 0) {
      return false;
    }

    for (const d2 of this.orderDates) {
      if (d2 == date) {
        return true;
      }
    }

    return false;
  }
}
