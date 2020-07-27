import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature-plan',
  templateUrl: './feature-plan.component.html',
  styleUrls: ['./feature-plan.component.css']
})
export class FeaturePlanComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
