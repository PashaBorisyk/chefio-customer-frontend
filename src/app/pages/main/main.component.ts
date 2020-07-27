import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../shared/service/menu.service';
import {first, timeout} from 'rxjs/operators';
import {LoaderService} from '../../shared/service/loader.service';
import { Menu } from 'src/app/core/model/menu';
import {HotOffersService} from '../../shared/service/hot-offers.service';
import {HotOffers} from '../../core/model/hot-offers';
import {Position} from '../../core/model/position';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  menu: Menu[] = [];
  hotOffers: Position[];

  constructor(private menuService: MenuService,
              private hotOffersService: HotOffersService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.hotOffersService.getHotOffers().subscribe(result => this.hotOffers = result);

    this.menuService.menuDateObserver.subscribe(date => {
        if (!date) {
          return;
        }
        this.menuService.getMenuByDate(date).subscribe(result => {
          this.menu = result.filter(data => data.positions.length !== 0);
          this.loader.changeLoaderState(false);
        });
      });
  }

  get positionFromHotOffers(): Position[] {
    if (!this.hotOffers) {
      return [];
    }
    // return this.hotOffers.map<Position>(data => data.position);
    return this.hotOffers;
  }
}
