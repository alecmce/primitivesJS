import { Svg } from './svg';

export interface Item {
  draw(config: ItemConfig): void;
  readonly radius: number;
}

export interface ItemConfig {
  readonly container: Svg;
  readonly x: number;
  readonly y: number;
}
