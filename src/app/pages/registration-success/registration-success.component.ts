import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/service/user.service';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent implements OnInit {

  email: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.registrationUser.subscribe(data => this.email = data);
  }

}
