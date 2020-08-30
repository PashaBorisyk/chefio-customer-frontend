import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CustomerInfo} from '../../../core/model/customer-info';
import {UserService} from '../../../shared/service/user.service';
import {LoaderService} from '../../../shared/service/loader.service';
import {AlertService} from '../../../shared/service/alert.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  customerInfo: CustomerInfo = new CustomerInfo();
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private userService: UserService,
              private alertService: AlertService,
              private loader: LoaderService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.loader.changeLoaderState(true);
    this.userService.createNewUser(this.customerInfo).subscribe(
      () => {
        this.closeEvent.emit(false);
        this.alertService.success('Пользователь успешно создан');
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
      }
    );
  }

  onClose(): void {
    this.closeEvent.emit(false);
  }

}
