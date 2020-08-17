import {FeedbackStatus} from './feedback-status';

export class FeedbackResponse {
  email = '';
  createdAt: Date = null;
  topic = '';
  comment = '';
  status: FeedbackStatus = FeedbackStatus.IN_REVIEW;
}
