import {Component, Input, OnInit} from '@angular/core';
import {PresentationPosition} from '../../../core/model/presentation-position';

@Component({
  selector: 'app-presentation-position-list',
  templateUrl: './presentation-position-list.component.html',
  styleUrls: ['./presentation-position-list.component.css']
})
export class PresentationPositionListComponent implements OnInit {

  @Input() positions: Position[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
