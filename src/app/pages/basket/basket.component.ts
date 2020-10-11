import { Component, OnInit } from '@angular/core';
import {CustomerContact} from '../../core/model/customer-contact';
import {CustomerContactService} from '../../shared/service/customer-contact.service';
import {LoaderService} from '../../shared/service/loader.service';
import {AlertService} from '../../shared/service/alert.service';
import {MenuService} from '../../shared/service/menu.service';
import {BucketService} from '../../shared/service/bucket.service';
import {PositionService} from '../../shared/service/position.service';
import {Position} from '../../core/model/position';
import {PositionBucketInfo} from '../../core/model/position-bucket-info';
import {BucketInfo} from '../../core/model/bucket-info';
import {OrderService} from '../../shared/service/order.service';
import {Order} from '../../core/model/order';
import {Address} from '../../core/model/address';
import {Router} from '@angular/router';
import {DateService} from '../../shared/service/date.service';
import {UserService} from '../../shared/service/user.service';
import {finalize} from 'rxjs/operators';
import {AuthService} from '../../shared/service/auth.service';
import {User} from '../../core/model/user';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  contactInfo = new CustomerContact();
  positions: Position[] = [];
  date = '';
  dateForBackend = '';
  total = 0;
  totalForPay = 0;
  comment = '';
  activeTime = '';
  limit = 0;
  disablePaymentType = false;
  companyDeliveryTime = [];
  forHomeDeliveryTime = [
    '11:30-12:30',
    '12:00-13:00',
    '13:30-14:30',
    '13:00-14:00',
    '14:00-15:00'
  ];
  activeTimes = this.forHomeDeliveryTime;
  companyAddress = new Address();
  user: User;
  address = ''
  street = '';

  constructor(private customerContactService: CustomerContactService,
              private loader: LoaderService,
              private menuService: MenuService,
              private positionService: PositionService,
              private bucketService: BucketService,
              private orderService: OrderService,
              private router: Router,
              private authService: AuthService,
              private dateService: DateService,
              private userService: UserService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.authService.user.subscribe(data => {
      this.user = data;
    });
    this.customerContactService.getContactInfo()
      .pipe(
        finalize(() => this.loader.changeLoaderState(false)))
      .subscribe(
      result => {
        console.log(result);
        this.contactInfo = result;
        if (!result.address) {
          this.contactInfo.address = new Address();
        }
      }
    );

    const ids = [];
    this.menuService.menuDateObserver.subscribe(
      active => {
        if (active) {
          const localDateString = this.dateService.convertToLocalDateString(active);
          this.total = 0;
          this.dateForBackend = this.dateService.convertToBackendFormat(active);
          this.date = localDateString;
          this.bucketService.getBucketInfo().forEach(
            position => {
              if (position.menuDate === localDateString) {
                this.total += (position.price * position.count);
                ids.push(position.id);
              }
            }
          );
          this.positionService.findByIdsIn(ids).subscribe(
            positions => {
              this.positions = positions;
              this.userService.getInfo().subscribe(result => {
                this.limit = result.limit;
                this.companyDeliveryTime = [result.deliveryTime];
                this.companyAddress = result.address == null ? new Address() : result.address;
                this.setActiveTimeRange();
                this.totalForPay = this.calculateTotalForPay();
              });
            }
          );
        }
      });

    this.bucketService.bucketInfoObserver.subscribe(result => {
      if (result) {
        this.changePositions(result);
      }
    });

  }


  clearAll(): void {
    this.clearAllPosition();
    this.alertService.success('Корзина очищена');
  }

  clearAllPosition(): void {
    this.bucketService.removeAll(this.positions.map(it => new BucketInfo(it.id, this.date)));
    this.positions = [];
  }

  createOrder(): void {
    if (this.order.positions.length > 0) {
      this.loader.changeLoaderState(true);
      const order = this.order;
      this.bucketService.getBucketInfo().forEach(data => {
        if (data.menuDate === this.date) {
          this.positions.forEach(pos => {
            if (pos.id === data.id) {
              pos.totalProduced = data.count;
            }
          });
        }
      });

      this.orderService.save(order).subscribe(
          () => {
            this.alertService.success('Заказ успешно создан');
            this.loader.changeLoaderState(false);
            this.clearAllPosition();
            this.router.navigate(['/']);
          },
          () => {
            this.loader.changeLoaderState(false);
          }
      );
    } else {
      this.alertService.errorMessage('Добавьте позиции для заказа');
    }
  }

  calculateSale(value: number): number {
    if (this.user != null && this.user.sale != null) {
      return +(value - (value / 100 * this.user.sale)).toFixed(2);
    }
    return value;
  }

  calculateTotalForPay(): number {
    const result = this.calculateSale(this.total) - this.limit;
    const returnResult = result > 0 ? result : 0;

    this.disablePaymentType = returnResult === 0;
    return returnResult;
  }

  setActiveTimeRange(): void {
    if (this.contactInfo.forHome) {
      this.activeTimes = this.forHomeDeliveryTime;
    } else {
      this.activeTimes = this.companyDeliveryTime;
    }

    this.userService.nextActiveTimes(this.activeTimes);
  }

  get order(): Order {
    console.log(this.address)
    const order = new Order();
    order.username = this.contactInfo.username;
    order.email = this.contactInfo.email;
    order.address = this.contactInfo.forHome ? this.contactInfo.address : this.companyAddress;
    order.toDate = this.dateForBackend;
    order.contactless = this.contactInfo.contactless;
    order.forHome = this.contactInfo.forHome;
    order.paymentMethod = this.disablePaymentType ? null : this.contactInfo.paymentMethod;
    order.comment = this.comment;
    order.deliveryPeriod = this.activeTime;
    order.total = this.calculateSale(this.total);
    order.totalForPay = this.totalForPay;
    order.positions = this.positions;
    order.phone = this.contactInfo.phone;
    return order;
  }

  setActiveTime($event): void {
    this.activeTime = $event;
  }

  private changePositions(result: PositionBucketInfo[]): void {
    this.total = 0;
    const remove = this.positions.map(it => it.id);
    result.forEach(data => {
      if (data.menuDate === this.date) {
        this.total += (data.price * data.count);

        const index = remove.indexOf(data.id);
        if (index > -1) {
          remove.splice(index, 1);
        }
      }
    });
    remove.forEach(item => {
      const index = this.positions.findIndex(pos => pos.id === item);
      if (index > -1) {
        this.positions.splice(index, 1);
      }
    });
    this.totalForPay = this.calculateTotalForPay();
  }
}
