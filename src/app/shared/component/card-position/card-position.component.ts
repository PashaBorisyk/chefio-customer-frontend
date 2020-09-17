import {Component, Input, OnInit} from '@angular/core';
import {PresentationPosition} from '../../../core/model/presentation-position';
import {Position} from '../../../core/model/position';
import {CardPositionDetailsDialogComponent} from './card-position-details-dialog/card-position-details-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-card-position',
  templateUrl: './card-position.component.html',
  styleUrls: ['./card-position.component.css']
})
export class CardPositionComponent implements OnInit {

  @Input() position: Position;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(): void {
    this.dialog.open(CardPositionDetailsDialogComponent, {
      data: this.position,
      width: '100%'
    });
  }
}
