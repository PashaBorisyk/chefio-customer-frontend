import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../../shared/service/question.service';
import {Question} from '../../../../core/model/question';
import {LoaderService} from '../../../../shared/service/loader.service';
import {AlertService} from '../../../../shared/service/alert.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  question: Question = new Question();

  constructor(private questionService: QuestionService,
              private alertService: AlertService,
              private loader: LoaderService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.question.value) {
      this.loader.changeLoaderState(true);
      this.questionService.save(this.question).subscribe(
        result => {
          this.alertService.success('Спасибо, ваш вопрос успешно создан');
          this.loader.changeLoaderState(false);
          this.question.value = '';
        },
        () => {
          this.loader.changeLoaderState(false);
        }
      );
    }
  }
}
