import {PositionGroup} from './position-group';

export interface Position {
  id: number;
  name: string;
  rate: number;
  price: number;
  tag: string;
  imageUrl: string;
  ingredients: string;
  positionGroup: PositionGroup;
  weight: number;
}
