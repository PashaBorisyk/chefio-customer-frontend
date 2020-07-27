import {Component, Input, OnInit} from '@angular/core';
import {PresentationPosition} from '../../../../core/model/presentation-position';

@Component({
  selector: 'app-presentation-position-item',
  templateUrl: './presentation-position-item.component.html',
  styleUrls: ['./presentation-position-item.component.css']
})
export class PresentationPositionItemComponent implements OnInit {

  @Input() position: PresentationPosition;

  constructor() { }

  ngOnInit(): void {
  }

}
