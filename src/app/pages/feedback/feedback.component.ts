import {Component, OnInit} from '@angular/core';
import {FeedbackResponse} from '../../core/model/feedback-response';
import {FeedbackStatus} from '../../core/model/feedback-status';
import {MatDialog} from '@angular/material/dialog';
import {FeedbackDialog} from '../../shared/component/feedback-button/feedback-button.component';
import {FeedbackService} from '../../shared/service/feedback.service';
import {LoaderService} from '../../shared/service/loader.service';
import {CustomerInfo} from '../../core/model/customer-info';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackArray: FeedbackResponse[] = [];
  count = 0;
  pageNumbers = [];
  page = 0;
  pageSize = 10;
  isDataLoaded = false;

  constructor(private dialog: MatDialog,
              private loader: LoaderService,
              private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.feedbackService.getFeedback(this.page, this.pageSize).subscribe(
      feedback => {
        this.feedbackArray = feedback;
        this.feedbackService.getFeedbackCount().subscribe(
          result => {
            this.count = result;
            this.loader.changeLoaderState(false);
            this.loadNumbers();
            this.isDataLoaded = true;
          },
          () => {
            this.loader.changeLoaderState(false);
          });
      },
      () => {
        this.loader.changeLoaderState(false);
      });
  }

  loadNumbers(): void {
    this.pageNumbers = Array.from(Array(this.pageSize), (_, i) => (this.page * this.pageSize) + i + 1);
  }

  getNumber(feedback: FeedbackResponse): number {
    return this.pageNumbers[this.feedbackArray.indexOf(feedback)];
  }

  loadPage(value: number): void {
    this.page = value - 1;
    this.loadFeedback();
  }

  loadFeedback(): void {
    this.loader.changeLoaderState(true);
    this.isDataLoaded = false;
    this.feedbackService.getFeedback(this.page, this.pageSize).subscribe(
      result => {
        this.feedbackService.getFeedbackCount().subscribe(
          count => {
            this.count = count;
            this.feedbackArray = result;
            this.loadNumbers();
            this.isDataLoaded = true;
            this.loader.changeLoaderState(false);
          },
          () => {
            this.isDataLoaded = true;
            this.loader.changeLoaderState(false);
          });
      },
      () => {
        this.isDataLoaded = true;
        this.loader.changeLoaderState(false);
      });
  }

  open(): void {
    this.dialog.open(FeedbackDialog).afterClosed()
      .subscribe( result => {
        if (result) {
          this.loadFeedback();
        }
      });
  }
}
