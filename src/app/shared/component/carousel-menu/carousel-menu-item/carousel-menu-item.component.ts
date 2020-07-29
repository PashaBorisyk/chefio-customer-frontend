import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-carousel-menu-item',
  templateUrl: './carousel-menu-item.component.html',
  styleUrls: ['./carousel-menu-item.component.css']
})
export class CarouselMenuItemComponent implements OnInit {

  @Input() count = 0;
  @Input() positions = [];
  @Input() position = 0;
  @Input() image = '../../../../../assets/img/food_image.jpg';
  @Output() positionEvent = new EventEmitter<number>();

  itemStyle;

  constructor() { }

  ngOnInit(): void {
    if (this.position % 2 === 1) {
      this.image = '../../../../../assets/img/food_image_2.png';
    }

    this.itemStyle = {
      backgroundImage: `url(${this.image})`
    };
    console.log(this.itemStyle);
    console.log(this.position);
  }

  go(value: number): void {
    this.positionEvent.emit(value);
    this.position = value;
  }
}
