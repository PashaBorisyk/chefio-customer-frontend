import { Component, OnInit } from '@angular/core';
import {DateRange} from '@angular/material/datepicker';
import {MenuService} from '../../service/menu.service';
import {LoaderService} from '../../service/loader.service';

const FROM_DATE_DAY = 10;
const TO_DATE_DAY = 10;

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

  now = new Date();
  choiceDate;
  dates: Date[] = [];
  activeDates: Date[] = [];

  constructor(private menuService: MenuService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.dates = this.getDates(
      this.minusDay(this.now, FROM_DATE_DAY),
      this.plusDay(this.now, TO_DATE_DAY));

    this.menuService.getMenuInDate(this.dates.map(it => it.toLocaleDateString())).subscribe(result => {
      this.setChoiceDate(this.now);
      this.activeDates = result.map(val => new Date(val));
      this.loader.changeLoaderState(false);
    });
  }

  setChoiceDate(date: Date): void {
    this.choiceDate = date;
    this.menuService.changeMenuDate(date.toLocaleDateString());
  }

  getDates(from: Date, to: Date): Date[] {
    const dateArray = Array();
    let currentDate = from;
    let day = 1;
    while (currentDate.valueOf() < to.valueOf()) {
        currentDate = this.plusDay(from, day++);
        dateArray.push(currentDate);
    }
    return dateArray;
  }

  plusDay(date: Date, value: number): Date {
    return new Date(new Date().setDate(date.getDate() + value));
  }

  minusDay(date: Date, value: number): Date {
    return new Date(new Date().setDate(date.getDate() - value));
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
}
