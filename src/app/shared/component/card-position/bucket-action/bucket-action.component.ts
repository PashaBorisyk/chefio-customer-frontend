import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../../../service/menu.service';
import {BucketService} from '../../../service/bucket.service';
import {DateService} from '../../../service/date.service';

@Component({
  selector: 'app-bucket-action',
  templateUrl: './bucket-action.component.html',
  styleUrls: ['./bucket-action.component.css']
})
export class BucketActionComponent implements OnInit {

  @Input() id: number;
  @Input() price: number;
  count = 0;
  menuDate: string;


  constructor(private menuService: MenuService,
              private dateService: DateService,
              private bucketService: BucketService) { }

  ngOnInit(): void {
    this.menuService.menuDateObserver.subscribe(date => {
      this.menuDate = this.dateService.convertToLocalDateString(date);
      const tempCount = this.bucketService.findBucketInfo(this.id, this.menuDate);
      if (tempCount) {
        this.count = tempCount.count;
      }
    });
  }

  plus(): void {
    this.count++;
    this.bucketService.addInBucket(this.id, this.menuDate, this.price);
  }

  minus(): void {
    if (this.count > 0) {
      this.count--;
      this.bucketService.removeInBucket(this.id, this.menuDate);
    }
  }
}
