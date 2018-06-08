import { DrawCircle } from './circle';
import { Item, ItemConfig } from './item';

const MULTIPLIER = 1.25;
const PHI = (Math.sqrt(5) + 1) / 2;
const PHI_2PI = PHI * 2 * Math.PI;

export interface FibonacciProps {
  readonly count: number;
  readonly color: string;
  readonly padding: number;
  readonly child: any;
}

export class Fibonacci implements Item {
  private readonly offset: number;
  public readonly radius: number;

  constructor(
    private readonly count: number,
    private readonly drawCircle: DrawCircle,
    private readonly color: string,
    private readonly padding: number,
    private readonly child: Item,
  ) {
    this.offset = child.radius + padding / 2;
    this.radius = Math.sqrt(count) * MULTIPLIER * this.offset + child.radius + padding;
  }

  draw(config: ItemConfig) {
    const { container, x, y } = config;
    const group = this.drawCircle({
      ...config,
      radius: this.radius,
      color: this.color,
      stroke: true,
    });

    for (let i = 1; i <= this.count; ++i) {
      var r = Math.sqrt(i) * MULTIPLIER * this.offset;
      var theta = i * PHI_2PI;
      this.child.draw({
        container: group,
        x: Math.cos(theta) * r,
        y: -Math.sin(theta) * r,
      });
    }
    return group;
  }
}
