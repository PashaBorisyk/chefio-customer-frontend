import { Component, OnInit } from '@angular/core';
import {FeedbackStarService} from '../../../shared/service/feedback-star.service';
import {FeedbackStar} from '../../../core/model/feedback-star';
import {AlertService} from '../../../shared/service/alert.service';
import {LoaderService} from '../../../shared/service/loader.service';

@Component({
  selector: 'app-feedback-block',
  templateUrl: './feedback-block.component.html',
  styleUrls: ['./feedback-block.component.css']
})
export class FeedbackBlockComponent implements OnInit {

  one = '#808080';
  two = '#808080';
  three = '#808080';
  four = '#808080';
  five = '#808080';

  showFeedback = true;

  constructor(private feedbackStarService: FeedbackStarService,
              private loader: LoaderService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.feedbackStarService.feedbackStar) {
      this.showFeedback = false;
    }
  }

  onOne(): void {
    this.one = 'white';
  }

  outOne(): void {
    this.one = '#808080';
  }

  onTwo(): void {
    this.one = 'white';
    this.two = 'white';
  }

  outTwo(): void {
    this.one = '#808080';
    this.two = '#808080';
  }

  onThree(): void {
    this.one = 'white';
    this.two = 'white';
    this.three = 'white';
  }

  outThree(): void {
    this.one = '#808080';
    this.two = '#808080';
    this.three = '#808080';
  }

  onFour(): void {
    this.one = 'white';
    this.two = 'white';
    this.three = 'white';
    this.four = 'white';
  }

  outFour(): void {
    this.one = '#808080';
    this.two = '#808080';
    this.three = '#808080';
    this.four = '#808080';
  }

  onFive(): void {
    this.one = 'white';
    this.two = 'white';
    this.three = 'white';
    this.four = 'white';
    this.five = 'white';
  }

  outFive(): void {
    this.one = '#808080';
    this.two = '#808080';
    this.three = '#808080';
    this.four = '#808080';
    this.five = '#808080';
  }

  sendFeedback(value: number): void {
    this.loader.changeLoaderState(true);
    this.feedbackStarService.save(new FeedbackStar(value)).subscribe(
      () => {
        this.loader.changeLoaderState(false);
        this.alertService.success('Спасибо за фидбэк');
        this.feedbackStarService.setFeedbackStar();
        this.showFeedback = false;
      },
      () => {
        this.loader.changeLoaderState(false);
      }
    );
  }
}
