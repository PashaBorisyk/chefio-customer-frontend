import {Component, Input, OnInit} from '@angular/core';
import {CustomerInfo} from '../../../core/model/customer-info';
import {SubscribeService} from '../../../shared/service/subscribe.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../shared/service/user.service';
import {CustomerStatus} from '../../../core/model/customer-status';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent implements OnInit {


  @Input() customer: CustomerInfo;
  @Input() number: number;
  openMenuAction = false;
  openMenuStatus = false;

  constructor(private subscriber: SubscribeService,
              private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscriber.clickObserver.subscribe(
      result => {
        if (result && this.openMenuAction && result.id != this.number) {
          this.openMenuAction = false;
        }
        if (result && this.openMenuStatus && result.id != this.number) {
          this.openMenuStatus = false;
        }
      }
    );
  }

  deleteUser(): void {
    this.dialog.open(DeleteUserDialog).afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteById(this.customer.id).subscribe(
          () => {
            this.userService.reloadUsersList();
          });
      }
    });
  }

  update(): void {
    this.userService.update(this.customer).subscribe(
      () => {
        this.userService.reloadUsersList();
      });
  }

  updateStatus(status: string): void {
    this.customer.status = CustomerStatus[status];
    this.update();
  }
}


@Component({
  templateUrl: './dialogs/delete-dialog.html',
  styleUrls: ['dialogs/delete-dialog.css']
})
export class DeleteUserDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialog>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
