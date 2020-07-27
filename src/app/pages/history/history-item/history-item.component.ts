import {Component, Input, OnInit} from '@angular/core';
import {HistoryResponse} from '../../../core/model/history-response';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() history: HistoryResponse;
  showPosition = false;

  constructor() { }

  ngOnInit(): void {
  }

}
