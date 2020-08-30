import {PositionGroup} from './position-group';

export interface Position {
  id: number;
  name: string;
  rate: number;
  price: number;
  categories: Category[];
  imageUrl: string;
  ingredients: string;
  positionGroup: PositionGroup;
  weight: number;
  totalProduced: number;
}

export interface Category {
  name: string;
}
