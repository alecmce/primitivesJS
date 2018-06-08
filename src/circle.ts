import { Svg } from "./svg";

export interface DrawCircle {
  (config: CircleConfig): Svg;
}

export interface CircleConfig {
  readonly color: string;
  readonly container: Svg;
  readonly radius: number;
  readonly stroke: boolean;
  readonly x: number;
  readonly y: number;
}

export function makeCircle(lineWidth: number): DrawCircle {
  return function draw({ container, x, y, radius, color, stroke }: CircleConfig): Svg {
    const translate = `translate(${x || 0},${y || 0})`;

    const group = new Svg('g')
      .appendTo(container.element)
      .setAttribute('transform', translate);

    const circle = new Svg('circle')
      .appendTo(group.element)
      .setAttribute('r', this.radius)
      .setAttribute('fill', color);

    stroke && circle
      .setAttribute('stroke', 'black')
      .setAttribute('stroke-width', `${lineWidth}`);

    return group
  }
}