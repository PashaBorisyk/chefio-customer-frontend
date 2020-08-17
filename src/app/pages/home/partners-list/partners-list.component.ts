import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../../shared/service/company.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.css']
})
export class PartnersListComponent implements OnInit {

  images: string[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getLogo().subscribe(result => this.images = result);
  }

}
