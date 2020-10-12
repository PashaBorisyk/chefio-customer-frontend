import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private format = 'dd-MM-yyyy';
  private formatForBackend = 'yyyy-MM-dd';

  constructor(private datePipe: DatePipe) { }

  convertToLocalDateString(date: Date): string {
    return this.datePipe.transform(date, this.format);
  }

  convertToBackendFormat(date: Date): string {
    return this.datePipe.transform(date, this.formatForBackend);
  }
}
