import {PaymentMethod} from './payment-method';
import {Address} from './address';

export class CustomerContact {
  id: number = null;
  email: string = null;
  phone: string = null;
  forHome: boolean;
  contactless: boolean;
  address: Address = new Address();
  telegramUsername: string = null;
  paymentMethod: PaymentMethod = PaymentMethod.CARD;
  username: string = null;
}
