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
        answer: 'Перед началом сотрудничества мы предлагаем всем нашим клиентам бесплатную дегустацию на трех человек. \n' +
          'После этого вы сможете выбрать тариф Dzinner Standard или Dzinner Premium и начать сотрудничество с нами.'
      },
      {
        point: 'Как часто меняется меню? ',
        answer: 'Меню меняется каждый день'
      },
      {
        point: 'Какие документы вы предоставляете с едой? ',
        answer: 'Мы предоставляем все сертификаты качества'
      },
      {
        point: 'Как я могу быть уверен в качестве еды?',
        answer: 'Каждому клиенту назначается один менеджер контроля качества. Он в минимальные сроки помогает уладить любые возникшие вопросы'
      },
      {
        point: 'Сколько сотрудников должно работать в моей компании, чтобы мы могли начать сотрудничество? ',
        answer: 'С планом Dzinner Standard мы начинаем сотрудничество от 100 человек. В случае Dzinner Premium минимального числа работников нет'
      },
      {
        point: 'До какого времени можно сделать предзаказ?',
        answer: 'Заказы принимаются до 18 часов предыдущего дня'
      }
    ];
  }
}
