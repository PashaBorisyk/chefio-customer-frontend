import {Component, Input, OnInit} from '@angular/core';
import {PresentationPosition} from '../../../../core/model/presentation-position';
import {Position} from '../../../../core/model/position';
import {MatDialog} from '@angular/material/dialog';
import {CardPositionDetailsDialogComponent} from '../../../../shared/component/card-position/card-position-details-dialog/card-position-details-dialog.component';

@Component({
  selector: 'app-presentation-position-item',
  templateUrl: './presentation-position-item.component.html',
  styleUrls: ['./presentation-position-item.component.css']
})
export class PresentationPositionItemComponent implements OnInit {

  @Input() position: Position;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.position);
  }

  openDialog(): void {
    this.dialog.open(CardPositionDetailsDialogComponent, {
      data: this.position,
      width: '100%'
    });
  }

}
