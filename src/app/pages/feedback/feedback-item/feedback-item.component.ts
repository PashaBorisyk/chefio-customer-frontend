import {Component, Input, OnInit} from '@angular/core';
import {FeedbackResponse} from '../../../core/model/feedback-response';
import {FeedbackStatus} from '../../../core/model/feedback-status';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {

  @Input() number: number;
  @Input() feedbackResponse: FeedbackResponse;

  constructor() { }

  ngOnInit(): void {
  }

  isInReview(): boolean {
    return this.feedbackResponse.status === FeedbackStatus.IN_REVIEW;
  }
}
