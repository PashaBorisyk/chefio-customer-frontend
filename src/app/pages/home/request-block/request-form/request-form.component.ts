import { Component, OnInit } from '@angular/core';
import {ClientRequest} from '../../../../core/model/client-request';
import {ClientRequestService} from '../../../../shared/service/client-request.service';
import {LoaderService} from '../../../../shared/service/loader.service';
import {AlertService} from '../../../../shared/service/alert.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  clientRequest = new ClientRequest();

  constructor(private clientRequestService: ClientRequestService,
              private loader: LoaderService,
              private alertService: AlertService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (
      this.clientRequest.username &&
      this.clientRequest.companyName &&
      this.clientRequest.email) {

      this.loader.changeLoaderState(true);
      this.clientRequestService.save(this.clientRequest).subscribe(
        () => {
          this.alertService.success('Заявка успешно создана');
          this.loader.changeLoaderState(false);
        },
        () => {
          this.loader.changeLoaderState(false);
        }
      )
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
