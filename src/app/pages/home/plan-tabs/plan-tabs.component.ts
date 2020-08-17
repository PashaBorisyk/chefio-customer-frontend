import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-tabs',
  templateUrl: './plan-tabs.component.html',
  styleUrls: ['./plan-tabs.component.css']
})
export class PlanTabsComponent implements OnInit {

  activeFirst = true;
  selectedTabIndex = 0;
  features = [
    'Менеджер, который полностью сопровождает обслуживание вашей компании',
    'Менеджер контроля качества',
    'Курьер, который реализует обеды у вас в офисе',
    'Широкое разнообразие меню каждый день',
    'Сбор и утилизация отходов (пластиковых контейнеров)'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  go(): void {
    const a = document.createElement('a');
    a.setAttribute('href', 'home#request');
    a.click();
  }
}
