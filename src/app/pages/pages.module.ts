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
import { ButtonReportComponent } from './users/button-report/button-report.component';


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
        MatTooltipModule
    ]
})
export class PagesModule { }
