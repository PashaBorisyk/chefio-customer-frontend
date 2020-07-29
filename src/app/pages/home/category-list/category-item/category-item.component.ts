import {Component, Input, OnInit} from '@angular/core';
import {PositionGroup} from '../../../../core/model/position-group';
import {CategoryService} from '../../../../shared/service/category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() value: PositionGroup;
  active = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.activeCategoryObserver.subscribe(data => {
      if (data && data.name === this.value.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }

  activeCategory(): void {
    this.categoryService.changeActiveCategory(this.value);
  }
}
