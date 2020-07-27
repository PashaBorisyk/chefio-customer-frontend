import { Component, OnInit } from '@angular/core';
import {PresentationPosition} from '../../../core/model/presentation-position';

@Component({
  selector: 'app-presentation-position-list',
  templateUrl: './presentation-position-list.component.html',
  styleUrls: ['./presentation-position-list.component.css']
})
export class PresentationPositionListComponent implements OnInit {

  positions: PresentationPosition[] = [
    {
      name: 'Яичница по деревенски',
      price: 5.20,
      ingredients: ['2 яица', 'колбаса', 'тосты'],
      rating: 4.8,
      feature: 'Вегитарянское',
      imageUrl: 'assets/img/example.png',
      squirrels: 22,
      carbohydrates: 22,
      weight: 220,
      fats: 22
    },
    {
      name: 'Яичница по деревенски',
      price: 5.20,
      ingredients: ['2 яица', 'колбаса', 'тосты'],
      rating: 4.8,
      feature: 'Вегитарянское',
      imageUrl: 'assets/img/example.png',
      weight: 220,
      squirrels: 22,
      carbohydrates: 22,
      fats: 22
    },
    {
      name: 'Яичница по деревенски',
      price: 5.20,
      weight: 220,
      ingredients: ['2 яица', 'колбаса', 'тосты'],
      rating: 4.8,
      feature: 'Вегитарянское',
      imageUrl: 'assets/img/example.png',
      squirrels: 22,
      carbohydrates: 22,
      fats: 22
    },
    {
      name: 'Яичница по деревенски',
      weight: 220,
      price: 5.20,
      ingredients: ['2 яица', 'колбаса', 'тосты'],
      rating: 4.8,
      feature: 'Вегитарянское',
      imageUrl: 'assets/img/example.png',
      squirrels: 22,
      carbohydrates: 22,
      fats: 22
    },
    {
      name: 'Яичница по деревенски',
      weight: 220,
      price: 5.20,
      ingredients: ['2 яица', 'колбаса', 'тосты'],
      rating: 4.8,
      feature: 'Вегитарянское',
      imageUrl: 'assets/img/example.png',
      squirrels: 22,
      carbohydrates: 22,
      fats: 22
    },
    {
      name: 'Яичница по деревенски',
      weight: 220,
      price: 5.20,
      ingredients: ['2 яица', 'колбаса', 'тосты'],
      rating: 4.8,
      feature: 'Вегитарянское',
      imageUrl: 'assets/img/example.png',
      squirrels: 22,
      carbohydrates: 22,
      fats: 22
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
