import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { LinkComponent } from './header/link/link.component';
import { RatingComponent } from './rating/rating.component';
import {MatChipsModule} from '@angular/material/chips';
import { CalendarComponent } from './calendar/calendar.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoCardSmallComponent } from './info-card/info-card-small/info-card-small.component';
import { InfoCardBigComponent } from './info-card/info-card-big/info-card-big.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BucketComponent } from './bucket/bucket.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { CardPositionComponent } from './card-position/card-position.component';
import { CardPositionCarouselComponent } from './card-position-carousel/card-position-carousel.component';
import { RatingFullComponent } from './rating/rating-full/rating-full.component';
import {FeedbackButtonComponent, FeedbackDialog} from './feedback-button/feedback-button.component';
import { CarouselMenuComponent } from './carousel-menu/carousel-menu.component';
import { CarouselMenuItemComponent } from './carousel-menu/carousel-menu-item/carousel-menu-item.component';
import { BucketActionComponent } from './card-position/bucket-action/bucket-action.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardPositionListComponent } from './card-position-list/card-position-list.component';
import {MatRippleModule} from '@angular/material/core';
import { PaginationComponent } from './pagination/pagination.component';
import { MobileInfoCardComponent } from './info-card/mobile-info-card/mobile-info-card.component';
import { CardPositionDetailsDialogComponent } from './card-position/card-position-details-dialog/card-position-details-dialog.component';
import { CardPositionNewListComponent } from './card-position-new-list/card-position-new-list.component';



@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      ButtonComponent,
      LoaderComponent,
      LinkComponent,
      RatingComponent,
      CalendarComponent,
      CardPriceComponent,
      InfoCardComponent,
      InfoCardSmallComponent,
      InfoCardBigComponent,
      BucketComponent,
      ButtonIconComponent,
      CardPositionComponent,
      CardPositionCarouselComponent,
      RatingFullComponent,
      FeedbackButtonComponent,
      CarouselMenuComponent,
      CarouselMenuItemComponent,
      BucketActionComponent,
      FeedbackDialog,
      CardPositionListComponent,
      PaginationComponent,
      MobileInfoCardComponent,
      CardPositionDetailsDialogComponent,
      CardPositionNewListComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        LoaderComponent,
        RatingComponent,
        CalendarComponent,
        CardPriceComponent,
        InfoCardComponent,
        CardPositionComponent,
        CardPositionCarouselComponent,
        FeedbackButtonComponent,
        CarouselMenuComponent,
        CardPositionListComponent,
        RatingFullComponent,
        PaginationComponent,
        CardPositionNewListComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatChipsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule
  ]
})
export class ComponentModule { }
