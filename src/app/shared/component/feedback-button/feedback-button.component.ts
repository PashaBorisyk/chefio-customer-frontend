import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../service/auth.service';
import {User} from '../../../core/model/user';
import {FeedbackService} from '../../service/feedback.service';
import {FeedbackResponse} from '../../../core/model/feedback-response';
import {LoaderService} from '../../service/loader.service';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-feedback-button',
  templateUrl: './feedback-button.component.html',
  styleUrls: ['./feedback-button.component.css']
})
export class FeedbackButtonComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(FeedbackDialog);
  }
}


@Component({
  templateUrl: './feedback-dialog.html',
  styleUrls: ['./feedback-dialog.css']
})
export class FeedbackDialog implements OnInit{

  file: File;
  feedback = new FeedbackResponse();
  saving = false;

  constructor(private authService: AuthService,
              private loader: LoaderService,
              private alertService: AlertService,
              private dialogRef: MatDialogRef<FeedbackDialog>,
              private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedback.email = this.authService.userValue.username;
  }

  handleFileInput(files: FileList): void {
    if (files.length > 0) {
      this.file = files[0];
    }
  }

  send(): void {
    this.saving = true;
    this.feedbackService.save(this.feedback, this.file).subscribe(
      () => {
        this.dialogRef.close(true);
        this.alertService.success('Спасибо за фидбэк, мы обработаем его в ближайшее время');
      }
    );
  }
}
