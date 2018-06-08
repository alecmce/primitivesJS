const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export class Svg {
  public readonly element: SVGElement;

  constructor(elementOrType: SVGElement | string) {
    if (typeof elementOrType == 'string') {
      this.element = document.createElementNS(SVG_NAMESPACE, elementOrType);
    }
  }

  append(child: SVGElement): this {
    this.element.appendChild(child);
    return this;
  }

  appendTo(container: SVGElement): this {
    container.appendChild(this.element);
    return this;
  }

  setAttribute(attribute: string, value: string): this {
    this.element.setAttributeNS(null, attribute, value);
    return this;
  }

  position(x: number, y: number): this {
    this.setAttribute('transform', `translate(${x},${y})`);
    return this;
  }

  scale(scalar: number): this {
    this.setAttribute('transform', `scale(${scalar})`);
    return this;
  }

  remove() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}
