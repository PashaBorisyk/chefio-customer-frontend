import {Client} from './client';
import {OrderStatus} from './order-status';

export interface HistoryResponse {
  id: number;
  date: Date;
  client: Client;
  street: string;
  manager: Client;
  positions: string[];
  courier: Client;
  total: number;
  totalForPay: number;
  status: OrderStatus
}
