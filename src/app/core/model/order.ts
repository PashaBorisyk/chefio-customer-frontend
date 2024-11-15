import {Address} from './address';
import {PaymentMethod} from './payment-method';
import {OrderState} from './order-state';
import {Position} from './position';

export class Order {
  id: number = null;
  username: string = null;
  address = new Address();
  toDate: string = null;
  channel = 'WEB';
  contactless = false;
  forHome = false;
  paymentMethod = PaymentMethod.CASH;
  comment: string = null;
  deliveryPeriod: string = null;
  total = 0;
  totalForPay = 0;
  state = OrderState.CONFIRMED;
  positions: Position[] = [];
  email: string = null;
  phone: string = null;
}
