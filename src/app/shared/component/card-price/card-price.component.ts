import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {User} from '../../../core/model/user';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input() value: number;
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(data => {
      this.user = data;
    });
  }

  calculateSale(): string {
    return (this.value - (this.value / 100 * this.user.sale)).toFixed(2);
  }
}
