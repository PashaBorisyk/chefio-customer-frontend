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
  @Output() positionEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  go(value: number): void {
    this.positionEvent.emit(value);
    this.position = value;
  }
}
