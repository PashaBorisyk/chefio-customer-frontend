import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() count;
  @Input() pageSize = 10;
  @Output() changePage = new EventEmitter();
  @Input() pageNow = 1;
  pages = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.pageNow);
    const size = Math.ceil(this.count / this.pageSize);
    this.pages = Array.from(Array(size), (_, i) => i + 1);
  }

  goTo(value: number): void {
    if (value !== this.pageNow) {
      this.changePage.emit(value);
    }
  }

  back(): void {
    if (this.pageNow > 1) {
      this.goTo(this.pageNow - 1);
    }
  }

  next(): void {
    if (this.pageNow < this.pages.length) {
      this.goTo(this.pageNow + 1);
    }
  }
}
