import {Component, OnInit} from '@angular/core';
import {FeedbackResponse} from '../../core/model/feedback-response';
import {FeedbackStatus} from '../../core/model/feedback-status';
import {MatDialog} from '@angular/material/dialog';
import {FeedbackDialog} from '../../shared/component/feedback-button/feedback-button.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: FeedbackResponse[] = [
    {
      date: '20.20.2020',
      topic: 'Доставка',
      comment: 'Долгая доставка',
      status: FeedbackStatus.IN_REVIEW
    },
    {
      date: '20.20.2020',
      topic: 'Доставка',
      comment: 'Долгая доставка',
      status: FeedbackStatus.DONE
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  open(): void {
    this.dialog.open(FeedbackDialog);
  }

}
