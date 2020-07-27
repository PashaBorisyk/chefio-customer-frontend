import {Component, Input, OnInit} from '@angular/core';
import {PresentationPosition} from '../../../core/model/presentation-position';
import {Position} from '../../../core/model/position';

@Component({
  selector: 'app-card-position',
  templateUrl: './card-position.component.html',
  styleUrls: ['./card-position.component.css']
})
export class CardPositionComponent implements OnInit {

  @Input() position: Position;

  constructor() { }

  ngOnInit(): void {

  }
}
