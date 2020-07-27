import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {PositionGroup} from '../../../core/model/position-group';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: PositionGroup[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => this.categories = data);
  }

}
