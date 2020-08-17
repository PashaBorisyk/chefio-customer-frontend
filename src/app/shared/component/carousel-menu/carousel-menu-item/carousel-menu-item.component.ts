import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PresentationCarouselItem} from '../../../../core/model/presentation-carousel-item';
import {DomSanitizer} from '@angular/platform-browser';

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
  @Input() item: PresentationCarouselItem;
  @Output() positionEvent = new EventEmitter<number>();

  header;
  itemStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.positions);
    if (this.position % 2 === 1) {
      this.image = '../../../../../assets/img/food_image_2.png';
    }
    this.header = this.sanitizer.bypassSecurityTrustHtml(this.item.header);
    this.itemStyle = {
      backgroundImage: `url(${this.image})`
    };
  }

  go(value: number): void {
    this.positionEvent.emit(value);
    this.position = value;
  }

  goToLink(): void {
    if (this.item.link) {
      const a = document.createElement('a');
      a.setAttribute('href', this.item.link);
      a.click();
    }
  }
}
