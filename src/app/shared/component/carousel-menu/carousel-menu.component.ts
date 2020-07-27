import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrls: ['./carousel-menu.component.css']
})
export class CarouselMenuComponent implements OnInit {

  countSide = 1;
  positionNow = 0;
  items = ['1', '2', '3', '4', '5', '6', '7'];
  itemsActive = [];
  pageSize = 0;
  pages = [];

  constructor() { }

  ngOnInit(): void {
    this.pageSize = Math.ceil(this.items.length / this.countSide);
    this.init();
    this.pages = Array(this.pageSize).fill(0).map((_, i) => i + 1);
  }

  init(): void {
    const a = (this.positionNow + 1) * this.countSide;
    this.itemsActive = this.items.slice(this.positionNow * this.countSide, a);
  }

  go($event): void {
    this.positionNow = $event;
    this.init();
  }

}
