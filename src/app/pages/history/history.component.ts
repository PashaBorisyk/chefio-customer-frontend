import {Component, OnInit} from '@angular/core';
import {HistoryResponse} from '../../core/model/history-response';
import {OrderStatus} from '../../core/model/order-status';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  histories: HistoryResponse[] = [
    {
      id: 1235,
      date: new Date(),
      client: {username: 'Ara Maga', phone: '137318239'},
      street: 'Пушкина Калатушкина',
      manager: {username: 'Ara Maga', phone: '137318239'},
      positions: ['123', '1234'],
      courier: {username: 'Ara Maga', phone: '137318239'},
      total: 20,
      totalForPay: 20.50,
      status: OrderStatus.DONE
    },
    {
      id: 1235,
      date: new Date(),
      client: {username: 'Ara Maga', phone: '137318239'},
      street: 'Пушкина Калатушкина',
      manager: {username: 'Ara Maga', phone: '137318239'},
      positions: ['123', '1234'],
      courier: {username: 'Ara Maga', phone: '137318239'},
      total: 20,
      totalForPay: 20.50,
      status: OrderStatus.ACCEPT
    },
    {
      id: 1235,
      date: new Date(),
      client: {username: 'Ara Maga', phone: '137318239'},
      street: 'Пушкина Калатушкина',
      manager: {username: 'Ara Maga', phone: '137318239'},
      positions: ['123', '1234'],
      courier: {username: 'Ara Maga', phone: '137318239'},
      total: 20,
      totalForPay: 20.50,
      status: OrderStatus.CANCELED
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
