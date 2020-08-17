import {Component, Input, OnInit} from '@angular/core';
import {Position} from '../../../../../core/model/position';
import {MatDialog} from '@angular/material/dialog';
import {FeedbackDialog} from '../../../../../shared/component/feedback-button/feedback-button.component';

@Component({
  selector: 'app-history-card-position-item',
  templateUrl: './history-card-position-item.component.html',
  styleUrls: ['./history-card-position-item.component.css']
})
export class HistoryCardPositionItemComponent implements OnInit {

  @Input() position: Position;

  constructor() { }

  ngOnInit(): void {
  }
}
