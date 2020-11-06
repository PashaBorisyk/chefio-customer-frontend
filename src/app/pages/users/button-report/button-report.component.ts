import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SubscribeService} from "../../../shared/service/subscribe.service";
import {HttpClient} from "@angular/common/http";
import {ReportsService} from "../../../shared/service/reports.service";
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import * as fileSaver from "file-saver";


@Component({
  selector: 'app-button-report',
  templateUrl: './button-report.component.html',
  styleUrls: ['./button-report.component.css']
})
export class ButtonReportComponent implements OnInit {

  constructor(private subscriber: SubscribeService,
              private dialog: MatDialog,
              private reportsService:ReportsService) {
  }

  openMenuAction = false;

  ngOnInit(): void {
  }

  openDialog() {
    this.openMenuAction = !this.openMenuAction;
  }

  createReportByUsers() {
    this
      .dialog
      .open(CreateDateRangeDialog,{data:{title:"Отчет по именам и сумме заказов"}})
      .afterClosed()
      .subscribe(result => {
        console.log(result)
          this.reportsService.createReportByUsers(result.dateFrom,result.dateTo).subscribe((response)=> {
            let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            fileSaver.saveAs(blob, `отчет по людям c ${result.dateFrom} по ${result.dateTo}.xlsx`);
          })
      });
  }

  createInvoiceHalfBelowLimitAndMinusLimitAboveLimitByDateBetweenAndCompanyName(){
    this
      .dialog
      .open(CreateDateRangeDialog,{data:{title:"отчет по сумме к оплате компанией c учетом специфики компенсаци"}})
      .afterClosed()
      .subscribe(result => {
        console.log(result)
        this.reportsService.createInvoiceHalfBelowLimitAndMinusLimitAboveLimitByDateBetweenAndCompanyName(result.dateFrom,result.dateTo).subscribe((response)=> {
          let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          fileSaver.saveAs(blob, `отчет по сумме к оплате компанией c учетом специфики компенсации c ${result.dateFrom} по ${result.dateTo}.xlsx`);
        })
      });
  }

  createInvoiceHalfBelowLimitAndMinusLimitAboveLimitByDateBetweenAndCompanyNameByDate(){
    this
      .dialog
      .open(CreateDateRangeDialog,{data:{title:"отчет по сумме к оплате компанией по дате"}})
      .afterClosed()
      .subscribe(result => {
        console.log(result)
        this.reportsService.createInvoiceHalfBelowLimitAndMinusLimitAboveLimitByDateBetweenAndCompanyNameByDate(result.dateFrom,result.dateTo).subscribe((response)=> {
          let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          fileSaver.saveAs(blob, `отчет по сумме к оплате компанией c учетом специфики компенсации c ${result.dateFrom} по ${result.dateTo} c группировкой по дате.xlsx`);
        })
      });
  }

  createReportForOrderCompliance(){
    this
      .dialog
      .open(CreateDateRangeDialog,{data:{title:"отчет по сумме к оплате компанией c учетом специфики компенсаци"}})
      .afterClosed()
      .subscribe(result => {
        console.log(result)
        this.reportsService.createReportForOrderCompliance(result.dateFrom,result.dateTo).subscribe((response)=> {
          let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          fileSaver.saveAs(blob, `отчет для сверки заказов c ${result.dateFrom} по ${result.dateTo} c группировкой по имени.xlsx`);
        })
      });
  }

  createReportForOrderComplianceByDate(){
    this
      .dialog
      .open(CreateDateRangeDialog,{data:{title:"отчет по сумме к оплате компанией c учетом специфики компенсаци"}})
      .afterClosed()
      .subscribe(result => {
        console.log(result)
        this.reportsService.createReportForOrderComplianceByDate(result.dateFrom,result.dateTo).subscribe((response)=> {
          let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          fileSaver.saveAs(blob, `отчет для сверки заказов c ${result.dateFrom} по ${result.dateTo} c группировкой по имени.xlsx`);
        })
      });
  }

}

@Component({
  templateUrl: './dialogs/create-report-by-users.html',
  styleUrls: ['./dialogs/create-report-by-users.css']
})
export class CreateDateRangeDialog {

  title:string;
  dateFrom: string;
  dateTo: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<CreateDateRangeDialog>, private datePipe:DatePipe) {
    this.title = data.title;
  }

  download(): void {
    this.dateFrom = this.datePipe.transform(this.range.value.start,'yyyy-MM-dd')
    this.dateTo = this.datePipe.transform(this.range.value.end,'yyyy-MM-dd')
    this.dialogRef.close({dateFrom: this.dateFrom, dateTo: this.dateTo});
  }

  cancel(): void {
    this.dialogRef.close(false)
  }
}

