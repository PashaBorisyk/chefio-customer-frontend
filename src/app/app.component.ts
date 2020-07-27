import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoaderService} from './shared/service/loader.service';
import {User} from './core/model/user';
import {AuthService} from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'client-ui';
  loading = false;
  user: User;

  constructor(private loader: LoaderService,
              private cdr: ChangeDetectorRef,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(data => this.user = data);
  }

  ngAfterViewChecked(): void{
    this.loader.subscribeOnLoader().subscribe(data => this.loading = data);
    this.cdr.detectChanges();
  }
}
