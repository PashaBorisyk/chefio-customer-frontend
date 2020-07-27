import {Component, Input, OnInit} from '@angular/core';
import {PositionGroup} from '../../../../core/model/position-group';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() value: PositionGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
