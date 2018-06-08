import { DrawCircle } from "./circle";
import { Item, ItemConfig } from "./item";

export class Two implements Item {
  public readonly radius: number;

  constructor(
    private readonly drawCircle: DrawCircle,
    private readonly color: string,
    private readonly padding: number,
    private readonly child: Item,
  ) {
    this.radius = (4 * child.radius + 3 * padding) / 2;
  }

  draw(config: ItemConfig) {
    var offset = this.child.radius + this.padding / 2;
    var container = this.drawCircle({
      ...config,
      radius: this.radius,
      color: this.color,
      stroke: true
    });
    this.child.draw({ container, x: +offset, y: 0 });
    this.child.draw({ container, x: -offset, y: 0 });
    return container;
  }
}
