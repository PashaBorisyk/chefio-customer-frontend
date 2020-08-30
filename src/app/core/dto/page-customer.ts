import {CustomerInfo} from '../model/customer-info';

export interface PageCustomer {
  content: CustomerInfo[];
  totalPages: number;
  totalElements: number;
}
