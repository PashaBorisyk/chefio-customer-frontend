import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-block',
  templateUrl: './phone-block.component.html',
  styleUrls: ['./phone-block.component.css']
})
export class PhoneBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  go(): void {
    const a = document.createElement('a');
    a.setAttribute('href', 'home#request');
    a.click();
  }
}
