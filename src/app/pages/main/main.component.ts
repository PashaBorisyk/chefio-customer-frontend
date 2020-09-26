import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../shared/service/menu.service';
import {first, timeout} from 'rxjs/operators';
import {LoaderService} from '../../shared/service/loader.service';
import { Menu } from 'src/app/core/model/menu';
import {HotOffersService} from '../../shared/service/hot-offers.service';
import {HotOffers} from '../../core/model/hot-offers';
import {Position} from '../../core/model/position';
import {DateService} from '../../shared/service/date.service';
import {PositionGroup} from '../../core/model/position-group';
import {CategoryService} from '../../shared/service/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories: PositionGroup[] = [];
  menu: Menu[] = [];
  activePositions: Position[] = [];
  date: string;

  constructor(private menuService: MenuService,
              private hotOffersService: HotOffersService,
              private dateService: DateService,
              private categoryService: CategoryService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);

    this.menuService.menuDateObserver.subscribe(date => {
        if (!date || this.dateService.convertToBackendFormat(date) == this.date) {
          this.loader.changeLoaderState(false);
          return;
        }
        this.date = this.dateService.convertToBackendFormat(date);
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
            this.menu = result.filter(data => data.positions.length !== 0);
            this.loader.changeLoaderState(false);
        },
          () => this.loader.changeLoaderState(false)
        );
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
