import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() value: string;
  @Input() link: string;

  constructor(private router: Router) { }

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
