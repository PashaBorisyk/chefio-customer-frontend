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

  constructor(private customerContactService: CustomerContactService,
              private loader: LoaderService,
              private menuService: MenuService,
              private positionService: PositionService,
              private bucketService: BucketService,
              private orderService: OrderService,
              private router: Router,
              private dateService: DateService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.customerContactService.getContactInfo().subscribe(
      result => {
        this.contactInfo = result;
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
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
                this.total += position.price;
                ids.push(position.id);
              }
            }
          );
          this.totalForPay = this.total;
          this.positionService.findByIdsIn(ids).subscribe(
            positions => {
              this.positions = positions;
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

  get order(): Order {
    const order = new Order();
    order.username = this.contactInfo.username;
    order.email = this.contactInfo.email;
    order.address = this.contactInfo.address;
    order.toDate = this.dateForBackend;
    order.contactless = this.contactInfo.contactless;
    order.forHome = this.contactInfo.forHome;
    order.paymentMethod = this.contactInfo.paymentMethod;
    order.comment = this.comment;
    order.deliveryPeriod = this.activeTime;
    order.total = this.total;
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
    this.totalForPay = this.total;
  }
}
