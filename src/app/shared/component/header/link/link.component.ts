import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() value: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

  go(): void {
    if (this.link) {
      const a = document.createElement('a');
      a.setAttribute('href', this.link);
      a.click();
    }
  }

}
