import { DrawCircle } from './circle';
import { Item, ItemConfig } from './item';
import { Svg } from './svg';

var ANGLE = Math.PI / 3;

export class Seven implements Item {
  private readonly offset: number;
  public readonly radius: number;

  constructor(
    private readonly drawCircle: DrawCircle,
    private readonly color: string,
    private readonly padding: number,
    private readonly child: Item,
  ) {
    this.offset = 2 * child.radius + padding;
    this.radius = this.offset + child.radius + padding;
  }

  draw(config: ItemConfig): Svg {
    const container = this.drawCircle({
      ...config,
      radius: this.radius,
      color: this.color,
      stroke: true,
    });

    this.child.draw({
      container,
      x: 0,
      y: 0,
    });

    for (var i = 0; i < 6; ++i) {
      var angle = ANGLE * i;
      var x = this.offset * Math.sin(angle);
      var y = this.offset * Math.cos(angle);
      this.child.draw({ container, x, y });
    }
    return container;
  }
}
