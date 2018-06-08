import { DrawCircle } from './circle';
import { Item, ItemConfig } from './item';

export class Atom implements Item {
  constructor(
    private readonly drawCircle: DrawCircle,
    public readonly radius: number,
  ) { }

  draw(config: ItemConfig) {
    return this.drawCircle({
      ...config,
      color: 'black',
      radius: this.radius,
      stroke: false,
    });
  }
}
