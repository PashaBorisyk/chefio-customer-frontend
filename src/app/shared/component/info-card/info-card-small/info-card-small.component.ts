import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-card-small',
  templateUrl: './info-card-small.component.html',
  styleUrls: ['./info-card-small.component.css']
})
export class InfoCardSmallComponent implements OnInit {

  @Input() header: string;
  @Input() description: string;
  @Input() image: string;
  color = '#080808';

  constructor() { }

  ngOnInit(): void {
  }

}
