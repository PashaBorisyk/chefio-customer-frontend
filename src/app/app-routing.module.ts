import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {RegistrationSuccessComponent} from './pages/registration-success/registration-success.component';
import {MainComponent} from './pages/main/main.component';
import {AuthGuard} from './shared/helper/auth.guard';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {BasketComponent} from './pages/basket/basket.component';
import {FeedbackComponent} from './pages/feedback/feedback.component';
import {HistoryComponent} from './pages/history/history.component';
import {UsersComponent} from './pages/users/users.component';
import {ManagerGuard} from './shared/helper/manager.guard';
import {ConfirmComponent} from './pages/confirm/confirm.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'order', component: BasketComponent, canActivate: [AuthGuard] },
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'confirm/:id', component: ConfirmComponent },
  { path: 'registration/success', component: RegistrationSuccessComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
