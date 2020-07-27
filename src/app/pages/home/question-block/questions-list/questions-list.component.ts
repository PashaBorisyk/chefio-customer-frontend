import { Component, OnInit } from '@angular/core';

export interface Question {
  point: string;
  answer: string;
}

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }


  init(): void {
    this.questions = [
      {
        point: 'Как начать с вами сотрудничать?',
        answer: 'Перед началом сотрудничества мы предлагаем всем нашим потенциальным клиентам бесплатную дегустацию на трех человек. \n' +
          'После этого вы сможете выбрать тариф dzinner standard или dzinner premium и начать сотрудничество с нами.'
      },
      {
        point: 'Как часто меняется меню? ',
        answer: 'Очень часто'
      },
      {
        point: 'Какие документы вы предоставляете с едой? ',
        answer: 'Никакие'
      },
      {
        point: 'Как я могу быть уверен в качестве еды?',
        answer: 'Никак'
      },
      {
        point: 'Сколько сотрудников должно работать в моей компании, чтобы мы могли начать сотрудничество? ',
        answer: 'Немного'
      },
      {
        point: 'До какого времени можно сделать предзаказ?',
        answer: 'До какого то'
      }
    ];
  }
}
