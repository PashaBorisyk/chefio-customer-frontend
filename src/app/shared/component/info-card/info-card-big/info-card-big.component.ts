import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-card-big',
  templateUrl: './info-card-big.component.html',
  styleUrls: ['./info-card-big.component.css']
})
export class InfoCardBigComponent implements OnInit {

  @Input() header: string;
  @Input() description: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
