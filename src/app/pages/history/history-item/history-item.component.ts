import {Component, Input, OnInit} from '@angular/core';
import {HistoryResponse} from '../../../core/model/history-response';
import {Order} from '../../../core/model/order';
import {FeedbackDialog} from '../../../shared/component/feedback-button/feedback-button.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() order: Order;
  showPosition = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getPositionsCount(){
    let count = 0
    this.order.positions.forEach((value) => {count += value.totalProduced})
    return count
  }


  openDialog(): void {
    this.dialog.open(FeedbackDialog);
  }
}
