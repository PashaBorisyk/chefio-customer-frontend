import { Injectable } from '@angular/core';
import {PositionBucketInfo} from '../../core/model/position-bucket-info';
import {BehaviorSubject} from 'rxjs';

const BUCKET_STORAGE_NAME = 'bucket';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  private bucketInfoSubject = new BehaviorSubject(null);
  bucketInfoObserver = this.bucketInfoSubject.asObservable();


  constructor() { }

  findBucketInfo(id: number, menuDate: string): PositionBucketInfo {
    return this.getBucketInfo().find(data => data.menuDate === menuDate && data.id === id);
  }

  getBucketInfo(): PositionBucketInfo[] {
    const bucket = localStorage.getItem(BUCKET_STORAGE_NAME);
    if (bucket) {
      return JSON.parse(bucket) as PositionBucketInfo[];
    }

    return [];
  }

  addInBucket(id: number, menuDate: string, price: number): void {
    let bucket = this.getBucketInfo();
    if (!bucket) {
      bucket = [];
      bucket.push({
        id,
        menuDate,
        count: 1,
        price
        });
      localStorage.setItem(BUCKET_STORAGE_NAME, JSON.stringify(bucket));
    } else {
      const position = bucket.find(data => data.menuDate === menuDate && data.id === id);
      if (position) {
        position.count++;
      } else {
        bucket.push({
            id,
            menuDate,
            count: 1,
            price
        });
      }
      localStorage.setItem(BUCKET_STORAGE_NAME, JSON.stringify(bucket));
    }
    this.bucketInfoSubject.next(bucket);
  }

  removeInBucket(id: number, menuDate: string): void {
    let bucket = this.getBucketInfo();
    if (bucket) {
      const position = bucket.find(data => data.menuDate === menuDate && data.id === id);
      if (position) {
        if (position.count !== 1) {
          position.count--;
        } else {
          bucket = bucket.filter(data => data.menuDate !== menuDate || data.id !== id);
        }
        localStorage.setItem(BUCKET_STORAGE_NAME, JSON.stringify(bucket));
      }
    }
    this.bucketInfoSubject.next(bucket);
  }
}
