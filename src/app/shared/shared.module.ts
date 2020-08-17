import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './helper/only-number.directive';



@NgModule({
  declarations: [OnlyNumberDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
