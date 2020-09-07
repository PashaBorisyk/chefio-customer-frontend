import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../shared/service/loader.service';
import {AuthService} from '../../shared/service/auth.service';
import {finalize} from 'rxjs/operators';
import {AlertService} from '../../shared/service/alert.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private loader: LoaderService,
              private alertService: AlertService,
              private authService: AuthService,
              private router: Router,
              private activeRouter: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.loader.changeLoaderState(true);
    this.authService.confirm(this.activeRouter.snapshot.paramMap.get('id'))
      .pipe(
        finalize(() => {
          this.loader.changeLoaderState(false);
          this.router.navigate(['/home']);
        }))
      .subscribe(result => {
        if (result) {
          this.alertService.success('Почта подтверждена успешно');
        }
      });
  }

}
