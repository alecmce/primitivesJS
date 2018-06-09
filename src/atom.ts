import { DrawCircle } from './circle';
import { Item, ItemConfig } from './item';
import { Svg } from './svg';

export class Atom implements Item {
  constructor(
    private readonly drawCircle: DrawCircle,
    public readonly radius: number,
  ) { }

  draw(config: ItemConfig): Svg {
    return this.drawCircle({
      ...config,
      color: 'black',
      radius: this.radius,
      stroke: false,
    });
  }
}
