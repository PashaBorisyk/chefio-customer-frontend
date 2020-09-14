import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {UserService} from '../../../shared/service/user.service';

@Component({
  selector: 'app-choice-time',
  templateUrl: './choice-time.component.html',
  styleUrls: ['./choice-time.component.css']
})
export class ChoiceTimeComponent implements OnInit {

  open = false;
  times = [];

  activeTime = '';
  listTimes = [];

  @Output() notifyActiveTime = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.orderActiveTimesObserver.subscribe( result => {
      if (result) {
        this.times = result;
        this.activeTime = this.times[0];
        this.listTimes = this.times.filter(it => it !== this.activeTime);
        this.notify();
      }
    });
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
