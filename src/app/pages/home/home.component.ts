import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../shared/service/menu.service';
import {LoaderService} from '../../shared/service/loader.service';
import {PositionGroup} from '../../core/model/position-group';
import {PresentationPosition} from '../../core/model/presentation-position';
import {Menu} from '../../core/model/menu';
import {CategoryService} from '../../shared/service/category.service';
import {DateService} from '../../shared/service/date.service';
import {finalize, first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: PositionGroup[] = [];
  menu: Menu[] = [];
  activePositions: Position[] = [];

  constructor(private menuService: MenuService,
              private categoryService: CategoryService,
              private dateService: DateService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.menuService.menuDateObserver
      .subscribe(date => {
        if (date) {
        this.menuService.getMenuByDate(this.dateService.convertToBackendFormat(date)).subscribe(result => {
          this.categories = [];
          result.forEach(menu => {
            if (menu.positions.length > 0) {
              this.categories.push(menu.positionGroup);
            }
          });
          this.menu = result;
          const activeMenu: Menu = result.length > 0 ? result[0] : null;
          if (activeMenu) {
            this.activePositions = activeMenu.positions;
            this.categoryService.changeActiveCategory(activeMenu.positionGroup);
          }
        });
      }
        this.loader.changeLoaderState(false);
    });
    this.categoryService.activeCategoryObserver.subscribe(result => {
      if (result) {
        this.menu
          .filter(data => data.positionGroup === result)
          .forEach(data => this.activePositions = (data.positions));
      }
    });
  }
}
