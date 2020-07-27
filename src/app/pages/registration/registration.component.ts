import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../shared/service/loader.service';
import {UserDto} from '../../core/model/user-dto';
import {AlertService} from '../../shared/service/alert.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  loading = false;
  hidePassword = true;
  hidePasswordConfirm = true;
  error = '';
  minLength = 6;

  constructor(private userService: UserService,
              private loader: LoaderService,
              private alertService: AlertService,
              private router: Router,
              private formBuilder: FormBuilder) {

    // check is logged

  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(this.minLength)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(this.minLength)])],
      passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(this.minLength)])]
    });
  }

  get f() {return this.registrationForm.controls;}


  onSubmit(): void {
    console.log(this.registrationForm);
    if (this.registrationForm.invalid) {
      return;
    }

    this.changeLoading(true);

    this.userService.registration(this.user).subscribe(
      () => {
        this.changeLoading(false);
        this.router.navigate(['/registration/success']);
        this.userService.nextUser(this.user.username);
        this.alertService.success('Аккаунт успешно создан');
      },
      () => {
        this.changeLoading(false);
      }
    );
  }

  get user(): UserDto {
    return {
      username: this.f.username.value,
      password: this.f.password.value,
      passwordConfirm: this.f.passwordConfirm.value
    } as UserDto;
  }

  changeLoading(data: boolean): void {
    this.loading = data;
    this.loader.changeLoaderState(data);
  }
}
