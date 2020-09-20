import { Component, OnInit } from '@angular/core';
import {BucketService} from '../../service/bucket.service';
import {MenuService} from '../../service/menu.service';
import {DatePipe} from '@angular/common';
import {DateService} from '../../service/date.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../../core/model/user';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  count = 0;
  price = 0;
  user: User;

  constructor(private bucketService: BucketService,
              private dateService: DateService,
              private authService: AuthService,
              private menuService: MenuService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(data => {
      this.user = data;
    });
    this.menuService.menuDateObserver.subscribe(active => {
      if (active) {
        const localDateString = this.dateService.convertToLocalDateString(active);
        this.bucketService.bucketInfoObserver.subscribe(data => {
          this.count = 0;
          this.price = 0;
          if (data) {
            data.forEach(position => {
              if (position.menuDate === localDateString) {
                this.count += position.count;
                this.price += (position.count * position.price);
              }
            });
          } else {
            this.bucketService.getBucketInfo()
              .forEach(position => {
                if (position.menuDate === localDateString) {
                  this.count += position.count;
                  this.price += (position.count * position.price);
                }
              });
          }
        });
      }
    });
  }

  calculatePrice(): string {
    if (this.user == null || this.user.sale == null) {
      return this.price.toFixed(2);
    } else {
      return (this.price - (this.price / 100 * this.user.sale)).toFixed(2);
    }
  }
}
