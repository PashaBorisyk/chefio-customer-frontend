import {Component, Inject, OnInit} from '@angular/core';
import {Position} from '../../../../core/model/position';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-card-position-details-dialog',
  templateUrl: './card-position-details-dialog.component.html',
  styleUrls: ['./card-position-details-dialog.component.css']
})
export class CardPositionDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Position) { }

  ngOnInit(): void {
  }

}
