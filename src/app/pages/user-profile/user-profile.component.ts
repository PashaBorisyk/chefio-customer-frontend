import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CustomerContactService} from '../../shared/service/customer-contact.service';
import {CustomerContact} from '../../core/model/customer-contact';
import {LoaderService} from '../../shared/service/loader.service';
import {AddressService} from '../../shared/service/address.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Address} from '../../core/model/address';
import {AlertService} from '../../shared/service/alert.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  contactInfo: CustomerContact = new CustomerContact();
  isFindAddress = false;
  addresses: string[] = [];

  addressFormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private customerContactService: CustomerContactService,
              private addressService: AddressService,
              private alertService: AlertService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);

    this.customerContactService.getContactInfo().subscribe(
      result => {
        this.contactInfo = result;
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
      });

    this.filteredOptions = this.addressFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  findAddress(): void {
    const address = this.addressFormControl.value;
    if (address.length > 3 && !this.isFindAddress) {
      this.isFindAddress = true;
      this.addressService.autoCompleteAddress(address).subscribe(
        result => {
          this.addresses = result.addresses;
          this.isFindAddress = false;
        },
        () => {
          this.isFindAddress = false;
        }
      );
    }
  }

  save(): void {
    this.loader.changeLoaderState(true);
    console.log(this.addressFormControl.value);
    if (this.addressFormControl.value) {
      const address = new Address();
      address.street = this.addressFormControl.value;
      this.contactInfo.address = address;
    }
    this.customerContactService.save(this.contactInfo).subscribe(
      () => {
        this.alertService.success('Данные успешно изменены');
        this.loader.changeLoaderState(false);
      },
      () => {
        this.loader.changeLoaderState(false);
      }
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.addresses.filter(option => option.toLowerCase().includes(filterValue));
  }
}
