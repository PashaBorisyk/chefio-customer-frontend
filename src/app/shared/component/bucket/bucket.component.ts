import { Component, OnInit } from '@angular/core';
import {BucketService} from '../../service/bucket.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  count: number;
  price: number;

  constructor(private bucketService: BucketService) { }

  ngOnInit(): void {
    this.bucketService.bucketInfoObserver.subscribe(data => {
      this.count = 0;
      this.price = 0;
      console.log(data);
      if (data) {
        data.forEach(position => {
          this.count += position.count;
          this.price += (position.count * position.price);
        });
      } else {
        this.bucketService.getBucketInfo()
          .forEach(position => {
            this.count += position.count;
            this.price += (position.count * position.price);
        });
      }
    });
  }

}
