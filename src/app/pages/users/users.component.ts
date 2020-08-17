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

  constructor(private userService: UserService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.userService.getTeammates(this.page, this.pageSize).subscribe(
      result => {
        this.customers = result;
        this.userService.getCountTeammates().subscribe(
          data => {
            this.count = data;
            this.loadNumbers();
            this.isDataLoaded = true;
            this.loader.changeLoaderState(false);
          },
          () => {
            this.loader.changeLoaderState(false);
          });
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

  loadTeammates(): void {
    this.loader.changeLoaderState(true);
    this.isDataLoaded = false;
    this.userService.getTeammates(this.page, this.pageSize).subscribe(
      data => {
        this.userService.getCountTeammates().subscribe(
          count => {
            this.count = count;
            this.customers = data;
            this.loadNumbers();
            this.isDataLoaded = true;
            this.loader.changeLoaderState(false);
          },
          () => {
            this.isDataLoaded = true;
            this.loader.changeLoaderState(false);
          });
      },
      () => {
        this.isDataLoaded = true;
        this.loader.changeLoaderState(false);
      });
  }
}
