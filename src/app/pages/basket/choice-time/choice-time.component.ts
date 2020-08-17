import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice-time',
  templateUrl: './choice-time.component.html',
  styleUrls: ['./choice-time.component.css']
})
export class ChoiceTimeComponent implements OnInit {

  open = false;
  times = [
    '11:00-11:30',
    '11:30-12:00',
    '12:00-12:30'
  ];

  activeTime = '';
  listTimes = [];

  @Output() notifyActiveTime = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.activeTime = this.times[0];
    this.listTimes = this.times.filter(it => it !== this.activeTime);
    this.notify();
  }


  changeTime(value: string): void {
    this.activeTime = value;
    this.listTimes = this.times.filter(it => it !== value);
    this.open = false;
    this.notify();
  }

  notify(): void {
    this.notifyActiveTime.emit(this.activeTime);
  }
}
