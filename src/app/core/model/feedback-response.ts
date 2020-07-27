import {FeedbackStatus} from './feedback-status';

export interface FeedbackResponse {
  date: string;
  topic: string;
  comment: string;
  status: FeedbackStatus;
}
