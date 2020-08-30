import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerInfo} from '../../../core/model/customer-info';
import {UserService} from '../../../shared/service/user.service';
import {LoaderService} from '../../../shared/service/loader.service';
import {AlertService} from '../../../shared/service/alert.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() number = 0;
  @Input() customerInfo: CustomerInfo = new CustomerInfo();
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private userService: UserService,
              private loader: LoaderService,
              private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.loader.changeLoaderState(true);
    this.userService.update(this.customerInfo).subscribe(
      () => {
        this.closeEvent.emit();
        this.alertService.success('Пользователь измене');
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
      }
    )
  }

  onClose(): void {
    this.closeEvent.emit();
  }
}
