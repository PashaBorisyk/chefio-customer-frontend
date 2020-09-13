import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {MenuService} from '../../service/menu.service';
import {Menu} from '../../../core/model/menu';
import {LoaderService} from '../../service/loader.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-card-position-carousel',
  templateUrl: './card-position-carousel.component.html',
  styleUrls: ['./card-position-carousel.component.css']
})
export class CardPositionCarouselComponent implements OnInit {

  @Input() positions: Position[] = [];
  countSide = 3;
  positionNow = 0;
  positionsActive = [];
  pageSize = 0;
  pages = [];
  isPagination = false;


  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
    console.log(this.positions);
    this.pageSize = Math.ceil(this.positions.length / this.countSide);
    this.isPagination = this.pageSize > 1;
    this.init();
    this.pages = Array(this.pageSize).fill(0).map((_, i) => i + 1);
  }


  next(): void {
    this.positionNow++;
    if (this.positionNow > this.pageSize - 1) {
      this.positionNow = 0;
    }
    const element = document.getElementById('card-carousel').classList.add('fadeOutLeft');
    this.init();
  }

  back(): void {
    this.positionNow--;
    if (this.positionNow < 0) {
      this.positionNow = this.pageSize - 1;
    }
    this.init();
  }

  init(): void {
    const a = (this.positionNow + 1) * this.countSide;
    this.positionsActive = this.positions.slice(this.positionNow * this.countSide, a);
  }


  go(value: number): void {
    this.positionNow = value - 1;
    this.init();
  }

}
