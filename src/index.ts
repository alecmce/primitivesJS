import { makeCircle } from './circle';
import { Item } from './item';
import { Primitive } from './primitive';
import { Svg } from './svg';

var ATOM_RADIUS = 4;
var OUTLINE_WIDTH = 2;

var drawCircle = makeCircle(OUTLINE_WIDTH);

export function drawPrimitive(svg: SVGSVGElement, value: number | number[]) {
  const item = new Primitive(drawCircle, ATOM_RADIUS, ATOM_RADIUS, value);
  const container = makeContainer(svg, item);
  item.draw({ container, x: 0, y: 0 });
}

function makeContainer(svg: SVGSVGElement, { radius }: Item) {
  const width = svg.clientWidth;
  const height = svg.clientHeight;
  const size = width < height ? width : height;

  const position = new Svg('g').appendTo(svg)
    .position(width / 2, height / 2);

  const scale = new Svg('g').appendTo(position.element)
    .scale(Math.min(1, size / (2.2 * radius)));

  return scale;
}
