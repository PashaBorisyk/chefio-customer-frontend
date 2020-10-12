import {CustomerStatus} from './customer-status';

export class CustomerInfo {
  id: number;
  username: string;
  credentials:string;
  position: string;
  email: string;
  phone: string;
  status: CustomerStatus;
}
