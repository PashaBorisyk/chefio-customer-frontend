import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
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

  createByUsers() {
    this
      .dialog
      .open(CreateReportByUsersDialog)
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

}

@Component({
  templateUrl: './dialogs/create-report-by-users.html',
  styleUrls: ['./dialogs/create-report-by-users.css']
})
export class CreateReportByUsersDialog {

  dateFrom: string;
  dateTo: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<CreateReportByUsersDialog>,private datePipe:DatePipe) {
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

