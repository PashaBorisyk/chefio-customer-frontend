import {OrderState} from './order-state';

export interface HistoryResponse {
  id: number;
  date: Date;
  street: string;
  positions: string[];
  total: number;
  totalForPay: number;
  status: OrderState;
}
