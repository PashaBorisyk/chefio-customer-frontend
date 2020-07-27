import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../shared/service/loader.service';
import {Router} from '@angular/router';
import {AlertService} from '../../shared/service/alert.service';
import {JwtRequest} from '../../core/model/jwt-request';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  hidePassword = true;

  constructor(private loader: LoaderService,
              private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private alertService: AlertService) {

    // check is logged
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {return this.loginForm.controls;}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.changeLoading(true);

    this.authService.login(this.jwtRequest).subscribe(
      data => {
        this.changeLoading(false);
        this.alertService.success('Успешная авторизация');
        this.router.navigate(['/']);
      },
    () => {
        this.changeLoading(false);
    });
  }

  get jwtRequest(): JwtRequest {
    return {
      username: this.f.username.value,
      password: this.f.password.value
    };
  }

  changeLoading(data: boolean): void {
    this.loading = data;
    this.loader.changeLoaderState(data);
  }
}
