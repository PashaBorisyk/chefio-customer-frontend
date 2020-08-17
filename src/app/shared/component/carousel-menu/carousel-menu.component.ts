import { Component, OnInit } from '@angular/core';
import {PresentationCarouselItem} from '../../../core/model/presentation-carousel-item';
import {PageService} from '../../service/page.service';

@Component({
  selector: 'app-carousel-menu',
  templateUrl: './carousel-menu.component.html',
  styleUrls: ['./carousel-menu.component.css']
})
export class CarouselMenuComponent implements OnInit {

  countSide = 1;
  positionNow = 0;
  itemsActive = [];
  pageSize = 0;
  pages = [];
  positions = [];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getActivePages().subscribe(
      result => {
        this.pages = result;
        this.positions = Array.from(Array(this.pages.length), (_, i) => i + 1);
        this.pageSize = Math.ceil(this.pages.length / this.countSide);
        this.init();
      });
  }

  init(): void {
    const a = (this.positionNow + 1) * this.countSide;
    this.itemsActive = this.pages.slice(this.positionNow * this.countSide, a);
  }

  go($event): void {
    this.positionNow = $event;
    this.init();
  }

}
