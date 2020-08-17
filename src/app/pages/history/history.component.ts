import {Component, OnInit} from '@angular/core';
import {HistoryResponse} from '../../core/model/history-response';
import {OrderState} from '../../core/model/order-state';
import {OrderService} from '../../shared/service/order.service';
import {LoaderService} from '../../shared/service/loader.service';
import {Order} from '../../core/model/order';
import {CustomerInfo} from '../../core/model/customer-info';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orders: Order[] = [];
  pageSize = 10;
  count = 0;
  page = 0;
  isDataLoaded = false;


  constructor(private orderService: OrderService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.orderService.countOrders().subscribe(
      count => {
        this.count = count;
        this.orderService.getDate(this.page, this.pageSize).subscribe(
          orders => {
            this.orders = orders;
            this.loader.changeLoaderState(false);
            this.isDataLoaded = true;
          },
          () => {
            this.loader.changeLoaderState(false);
          });
      },
      () => {
        this.loader.changeLoaderState(false);
      }
    );
  }

  loadPage(value: number): void {
    this.page = value - 1;
    this.loadOrders();
  }

  loadOrders(): void {
    this.loader.changeLoaderState(true);
    this.orderService.getDate(this.page, this.pageSize).subscribe(
      result => {
        this.orders = result;
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
      });
  }

}
