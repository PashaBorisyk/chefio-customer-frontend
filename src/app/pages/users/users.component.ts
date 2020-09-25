import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {CustomerInfo} from '../../core/model/customer-info';
import {LoaderService} from '../../shared/service/loader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  customers: CustomerInfo[] = [];
  pageNumbers = [];
  page = 0;
  pageSize = 10;
  count = 0;
  isDataLoaded = false;
  searchValue = '';
  newUser = false;

  constructor(private userService: UserService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.userService.getTeammates(this.preRequest()).subscribe(
      result => {
        this.customers = result.content;
        this.count = result.totalElements;
        this.loadNumbers();
        this.isDataLoaded = true;
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
      });

    this.userService.usersListObserver.subscribe(result => {
      if (result) {
        this.loadTeammates();
      }
    });
  }

  loadNumbers(): void {
    this.pageNumbers = Array.from(Array(this.pageSize), (_, i) => (this.page * this.pageSize) + i + 1);
  }

  getNumber(customerInfo: CustomerInfo): number {
    return this.pageNumbers[this.customers.indexOf(customerInfo)];
  }

  loadPage($event): void {
    this.page = $event - 1;
    this.loadTeammates();
  }

  preRequest(): UserRequest {
    const search = this.searchValue.length > 0 ? this.searchValue : null;
    return {
      page: this.page,
      size: this.pageSize,
      search
    };
  }

  loadTeammates(): void {
    this.loader.changeLoaderState(true);
    this.isDataLoaded = false;
    this.userService.getTeammates(this.preRequest()).subscribe(
      data => {
        this.customers = data.content;
        this.count = data.totalElements;
        this.loadNumbers();
        this.isDataLoaded = true;
        this.loader.changeLoaderState(false);
      },
      () => {
        this.isDataLoaded = true;
        this.loader.changeLoaderState(false);
      });
  }

  onSearch(): void {
    this.page = 0;
    this.loadTeammates();
  }

  closeEvent(): void {
    this.newUser = false;
    this.loadTeammates();
  }
}

export interface UserRequest {
  page: number;
  size: number;
  search: string;
}
