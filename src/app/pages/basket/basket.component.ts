import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  times = [
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00'
  ];

  selectTime: string;
  constructor() { }

  ngOnInit(): void {
  }

}
