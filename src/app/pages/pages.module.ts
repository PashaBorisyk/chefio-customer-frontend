import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ComponentModule} from '../shared/component/component.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { MainComponent } from './main/main.component';
import { CategoryItemComponent } from './home/category-list/category-item/category-item.component';
import {CategoryListComponent} from './home/category-list/category-list.component';
import { PresentationPositionListComponent } from './home/presentation-position-list/presentation-position-list.component';
import { PresentationPositionItemComponent } from './home/presentation-position-list/presentation-position-item/presentation-position-item.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlanTabsComponent } from './home/plan-tabs/plan-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FeaturePlanComponent } from './home/plan-tabs/feature-plan/feature-plan.component';
import { PartnersListComponent } from './home/partners-list/partners-list.component';
import { QuestionBlockComponent } from './home/question-block/question-block.component';
import { QuestionsListComponent } from './home/question-block/questions-list/questions-list.component';
import { QuestionItemComponent } from './home/question-block/questions-list/question-item/question-item.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { QuestionFormComponent } from './home/question-block/question-form/question-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RequestBlockComponent } from './home/request-block/request-block.component';
import { RequestFormComponent } from './home/request-block/request-form/request-form.component';
import { FeedbackBlockComponent } from './home/feedback-block/feedback-block.component';
import { PhoneBlockComponent } from './home/phone-block/phone-block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BasketComponent } from './basket/basket.component';
import {MatSelectModule} from '@angular/material/select';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HistoryComponent } from './history/history.component';
import { HistoryHeaderComponent } from './history/history-header/history-header.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';
import { UsersComponent } from './users/users.component';
import {ButtonReportComponent, CreateReportByUsersDialog} from './users/button-report/button-report.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { ChoiceTimeComponent } from './basket/choice-time/choice-time.component';
import { HistoryCardPositionListComponent } from './history/history-item/history-card-position-list/history-card-position-list.component';
import { HistoryCardPositionItemComponent } from './history/history-item/history-card-position-list/history-card-position-item/history-card-position-item.component';
import {DeleteUserDialog, UsersItemComponent} from './users/users-item/users-item.component';
import { MenuActionComponent } from './users/menu-action/menu-action.component';
import {MatMenuModule} from '@angular/material/menu';
import { FeedbackItemComponent } from './feedback/feedback-item/feedback-item.component';
import { FeedbackHeaderComponent } from './feedback/feedback-header/feedback-header.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
    declarations: [
      HomeComponent,
      LoginComponent,
      RegistrationComponent,
      RegistrationSuccessComponent,
      MainComponent,
      CategoryListComponent,
      CategoryItemComponent,
      PresentationPositionListComponent,
      PresentationPositionItemComponent,
      PlanTabsComponent,
      FeaturePlanComponent,
      PartnersListComponent,
      QuestionBlockComponent,
      QuestionsListComponent,
      QuestionItemComponent,
      QuestionFormComponent,
      RequestBlockComponent,
      RequestFormComponent,
      FeedbackBlockComponent,
      PhoneBlockComponent,
      UserProfileComponent,
      BasketComponent,
      FeedbackComponent,
      HistoryComponent,
      HistoryHeaderComponent,
      HistoryItemComponent,
      UsersComponent,
      ButtonReportComponent,
      ChoiceTimeComponent,
      HistoryCardPositionListComponent,
      HistoryCardPositionItemComponent,
      UsersItemComponent,
      MenuActionComponent,
      DeleteUserDialog,
      CreateReportByUsersDialog,
      FeedbackItemComponent,
      FeedbackHeaderComponent,
      NewUserComponent,
      EditUserComponent,
      ConfirmComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ComponentModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PagesModule { }
