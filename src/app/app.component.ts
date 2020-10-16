import {AfterViewChecked, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {LoaderService} from './shared/service/loader.service';
import {User} from './core/model/user';
import {AuthService} from './shared/service/auth.service';
import {MenuService} from './shared/service/menu.service';
import {MenuDate} from './core/model/menu-date';
import {SubscribeService} from './shared/service/subscribe.service';

const FROM_DATE_DAY = 0;
const TO_DATE_DAY = 10;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'client-ui';
  loading = false;
  user: User;

  constructor(private loader: LoaderService,
              private cdr: ChangeDetectorRef,
              private menuService: MenuService,
              private subscriber: SubscribeService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(data => this.user = data);

    const now = new Date();
    const from = this.minusDay(now, FROM_DATE_DAY);
    const to = this.plusDay(now, TO_DATE_DAY);
    const dates = this.getDates(from, to);


    this.menuService.getMenuInDate(dates).subscribe(
      result => {
        if (result && result.length > 0) {
          const activeDates = result.map(it => new Date(it));
          const activeDate = this.findDateActiveDate(activeDates);
          this.menuService.changeMenuDate(activeDate);
          this.menuService.changeMenuDateInit(new MenuDate(dates, activeDates, activeDate));
        } else {
          this.menuService.changeMenuDate(new Date());
          this.menuService.changeMenuDateInit(new MenuDate(dates, [], new Date()));
        }
      }
    );
  }

  ngAfterViewChecked(): void{
    this.loader.subscribeOnLoader().subscribe(data => this.loading = data);
    this.cdr.detectChanges();
  }

  plusDay(date: Date, value: number): Date {
    const dateTemp = new Date(date.valueOf());
    dateTemp.setDate(date.getDate() + value);
    return dateTemp;
  }

  minusDay(date: Date, value: number): Date {
    const dateTemp = new Date(date.valueOf());
    dateTemp.setDate(date.getDate() - value);
    return dateTemp;
  }

  getDates(from: Date, to: Date): Date[] {
    const dateArray = Array();
    let currentDate = from;
    let day = 1;

    while (currentDate < to) {
      currentDate = this.plusDay(from, day++);
      dateArray.push(currentDate);
    }
    return dateArray;
  }

  findDateActiveDate(activeDates: Date[]): Date {
    const now = new Date();

    // Date today
    // const date = activeDates.find(value => this.dateEquals(value, now));
    //
    // if (date) {
    //   return date;
    // }

    // let activeDate = null;
    // console.log()
    // activeDates.forEach(value => {
    //   if (value > now && !activeDate) {
    //     activeDate = value;
    //   }
    // });
    //
    // if (activeDate) {
    //   return activeDate;
    // }
    //
    // return activeDates[activeDates.length - 1];
    let maxDate = new Date(Math.min.apply(null,activeDates));
    return maxDate
  }

  dateEquals(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear()
      && d1.getMonth() === d2.getMonth()
      && d1.getDate() === d2.getDate()
      && d1.getDay() === d2.getDay();
  }

  @HostListener('click', ['$event.target'])
  onClick(value): void {
    this.subscriber.onClick(value);
  }
}
