import {Component, Input, OnInit} from '@angular/core';
import {Position} from '../../../core/model/position';

@Component({
  selector: 'app-card-position-new-list',
  templateUrl: './card-position-new-list.component.html',
  styleUrls: ['./card-position-new-list.component.css']
})
export class CardPositionNewListComponent implements OnInit {

  @Input() positions: Position[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
