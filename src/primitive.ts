import { Atom } from './atom';
import { DrawCircle } from './circle';
import { factorize } from './factorize';
import { Fibonacci } from './fibonacci';
import { Five } from './five';
import { getColor } from './get_color';
import { Seven } from './seven';
import { Three } from './three';
import { Two } from './two';
import { Item, ItemConfig } from './item';

export class Primitive implements Item {
  private readonly item: Item;
  public readonly radius: number;

  constructor(
    private readonly drawCircle: DrawCircle,
    private readonly atomRadius: number,
    private readonly spacing: number,
    value: number | number[],
  ) {
    const atom = new Atom(drawCircle, atomRadius);
    this.item = getFactors(value).reduce((node: Item, factor: number) => this.wrapItem(node, factor), atom);
    this.radius = this.item.radius;
  }

  draw(config: ItemConfig) {
    return this.item.draw(config);
  }

  private wrapItem(item: Item, factor: number): Item {
    switch (factor * 1) {
      case 2:
        return new Two(this.drawCircle, getColor(2), this.spacing, item);
      case 3:
        return new Three(this.drawCircle, getColor(3), this.spacing, item);
      case 5:
        return new Five(this.drawCircle, getColor(5), this.spacing, item);
      case 7:
        return new Seven(this.drawCircle, getColor(7), this.spacing, item);
      default:
        return new Fibonacci(factor, this.drawCircle, getColor(factor), this.spacing, item);
    }
  }
}

function getFactors(input: number | number[]): number[] {
  const factors = typeof input === 'number' ? [input] : input;
  return factors.reduce((list, factor) => factor == 1 ? list : [...list, ...factorize(factor)], []);
}