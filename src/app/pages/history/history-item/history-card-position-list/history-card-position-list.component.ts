import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-card-position-list',
  templateUrl: './history-card-position-list.component.html',
  styleUrls: ['./history-card-position-list.component.css']
})
export class HistoryCardPositionListComponent implements OnInit {

  @Input() positions: Position[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.positions);
  }

}
