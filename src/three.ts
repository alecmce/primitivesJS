import { DrawCircle } from "./circle";
import { Item, ItemConfig } from "./item";

const ANGLE = Math.PI * 2 / 3;
const DIVISOR = Math.cos(Math.PI / 6);

export class Three implements Item {
  private readonly offset: number;
  public readonly radius: number;

  constructor(
    private readonly drawCircle: DrawCircle,
    private readonly color: string,
    private readonly padding: number,
    private readonly child: Item,
  ) {
    this.offset = (child.radius + padding / 2) / DIVISOR;
    this.radius = this.offset + child.radius + padding;
  }

  draw(config: ItemConfig) {
    const container = this.drawCircle({
      ...config,
      radius: this.radius,
      color: this.color,
      stroke: true,
    });
    for (let i = 0; i < 3; ++i) {
      const angle = ANGLE * i;
      const x = this.offset * Math.sin(angle);
      const y = -this.offset * Math.cos(angle);
      this.child.draw({ container, x, y });
    }
    return container;
  }
}
