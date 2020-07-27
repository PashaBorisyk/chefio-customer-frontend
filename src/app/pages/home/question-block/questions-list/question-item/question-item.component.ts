import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../questions-list.component';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {

  @Input() question: Question;
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.isOpen = this.isOpen === false;
  }
}
