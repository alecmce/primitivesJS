import { DrawCircle } from "./circle";
import { Item, ItemConfig } from "./item";

const SCALAR = Math.sqrt(2) / 2;

export class Five implements Item {
  private readonly offset: number;
  private readonly delta: number;
  public readonly radius: number;

  constructor(
    private readonly drawCircle: DrawCircle,
    private readonly color: string,
    private readonly padding: number,
    private readonly child: Item,
  ) {
    this.offset = 2 * child.radius + padding;
    this.radius = this.offset + child.radius + padding;
    this.delta = SCALAR * this.offset;
  }

  draw(config: ItemConfig) {
    var container = this.drawCircle({
      ...config,
      radius: this.radius,
      color: this.color,
      stroke: true,
    });
    this.child.draw({ container, x: 0, y: 0 });
    this.child.draw({ container, x: +this.delta, y: +this.delta });
    this.child.draw({ container, x: +this.delta, y: -this.delta });
    this.child.draw({ container, x: -this.delta, y: -this.delta });
    this.child.draw({ container, x: -this.delta, y: +this.delta });
    return container;
  }
}
